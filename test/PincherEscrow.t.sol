// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../contracts/PincherEscrow.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Mock USDC for testing
contract MockUSDC is ERC20 {
    constructor() ERC20("USD Coin", "USDC") {
        _mint(msg.sender, 1000000 * 10**18); // Mint 1M USDC to deployer
    }
    
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}

contract PincherEscrowTest is Test {
    PincherEscrow public escrow;
    MockUSDC public usdc;

    uint256 public userPrivateKey;
    address public user;
    address public owner;

    // EIP-712 Domain Separator components
    bytes32 constant TYPE_HASH = keccak256("CarpoolPayment(string rideId,string amount,address payer,uint256 deadline)");

    function setUp() public {
        owner = address(this);
        
        // Setup User Wallet
        userPrivateKey = 0xA11CE;
        user = vm.addr(userPrivateKey);
        
        // Deploy Mock USDC
        usdc = new MockUSDC();
        
        // Deploy Escrow
        escrow = new PincherEscrow(address(usdc));

        // Fund User
        usdc.mint(user, 1000 * 10**18);
        
        // User approves Escrow
        vm.startPrank(user);
        usdc.approve(address(escrow), type(uint256).max);
        vm.stopPrank();
    }

    function testDepositEscrow() public {
        string memory rideId = "ride-123";
        string memory amountStr = "25.00";
        uint256 amountUnits = 25 * 10**18;
        uint256 deadline = block.timestamp + 1 hours;

        // 1. Construct EIP-712 Digest
        bytes32 structHash = keccak256(abi.encode(
            TYPE_HASH,
            keccak256(bytes(rideId)),
            keccak256(bytes(amountStr)),
            user,
            deadline
        ));

        // Fetch domain separator from contract (or construct manually)
        bytes32 digest = escrow.hashTypedDataV4(structHash);

        // 2. Sign
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(userPrivateKey, digest);
        bytes memory signature = abi.encodePacked(r, s, v);

        // 3. Execute Deposit
        vm.prank(user); // Payer executes, or Relayer executes? Actually frontend user calls existing submit usually, or relayer.
        // In our contract: "require(signer == msg.sender, 'Invalid signature')" implies user MUST submit their own tx.
        // Wait, if msg.sender must be signer, then EIP-712 is just for strict verification of args, not gasless relay.
        // Let's assume standard flow where User calls the contract directly for now.
        
        escrow.depositEscrow(rideId, amountStr, amountUnits, deadline, signature);

        // Verify
        assertEq(escrow.ridePaid(rideId), true);
        assertEq(escrow.rideEscrowAmount(rideId), amountUnits);
        assertEq(usdc.balanceOf(address(escrow)), amountUnits);
    }

    function testCannotDepositWithInvalidSignature() public {
        string memory rideId = "ride-123";
        string memory amountStr = "25.00";
        uint256 amountUnits = 25 * 10**18;
        uint256 deadline = block.timestamp + 1 hours;

        bytes32 structHash = keccak256(abi.encode(
            TYPE_HASH,
            keccak256(bytes(rideId)),
            keccak256(bytes("DIFFERENT_AMOUNT")), // Tampered data
            user,
            deadline
        ));
        
        bytes32 digest = escrow.hashTypedDataV4(structHash);
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(userPrivateKey, digest);
        bytes memory signature = abi.encodePacked(r, s, v);

        vm.prank(user);
        vm.expectRevert("Invalid signature"); // Should fail because signature matches "DIFFERENT_AMOUNT" but we pass "25.00" in verify?
        // Wait, logic: verify(original_args) -> recovers signer. If signature was made on different args, recovered signer != user.
        
        escrow.depositEscrow(rideId, amountStr, amountUnits, deadline, signature);
    }

    function testReleaseFunds() public {
        // First deposit
        testDepositEscrow();
        
        uint256 initialBalance = usdc.balanceOf(owner);
        uint256 escrowAmount = 25 * 10**18;

        // Release
        escrow.releaseFunds("ride-123", owner);

        assertEq(usdc.balanceOf(owner), initialBalance + escrowAmount);
        assertEq(escrow.ridePaid("ride-123"), false); // Reset
    }
}

// Helper to expose internal hash function for test preparation
contract ExposeHash is PincherEscrow {
    constructor(address t) PincherEscrow(t) {}
    function hashTypedDataV4(bytes32 structHash) public view returns (bytes32) {
        return _hashTypedDataV4(structHash);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

/**
 * @title PincherEscrow
 * @dev Handles secure ride payments using EIP-712 signatures and USDC escrow.
 *      Aligns with the 'Payment Challenge' frontend flow.
 */
contract PincherEscrow is EIP712, Ownable {
    using ECDSA for bytes32;

    IERC20 public usdc;
    
    // Payment Challenge Typehash
    bytes32 private constant CARPOOL_PAYMENT_TYPEHASH = keccak256(
        "CarpoolPayment(string rideId,string amount,address payer,uint256 deadline)"
    );

    // Events
    event EscrowDeposited(string indexed rideId, address indexed payer, uint256 amount);
    event EscrowReleased(string indexed rideId, address indexed recipient, uint256 amount);
    event EscrowRefunded(string indexed rideId, address indexed payer, uint256 amount);

    // State
    mapping(string => bool) public ridePaid;
    mapping(string => uint256) public rideEscrowAmount;
    mapping(string => address) public ridePayer;

    constructor(address _usdcAddress) EIP712("Pincher Carpool", "1") Ownable(msg.sender) {
        usdc = IERC20(_usdcAddress);
    }

    /**
     * @notice Verifies the EIP-712 signature and deposits USDC into escrow.
     * @param rideId The unique ride identifier
     * @param amount The amount string (e.g. "25.50") - parsing logic handled off-chain or via scaled units
     * @param amountUnits The actual uint256 amount in USDC units (wei/mwei)
     * @param deadline Expiry of the signature
     * @param signature The payer's signature
     */
    function depositEscrow(
        string memory rideId, 
        string memory amount,
        uint256 amountUnits,
        uint256 deadline, 
        bytes calldata signature
    ) external {
        require(!ridePaid[rideId], "Ride already paid");
        require(block.timestamp <= deadline, "Signature expired");

        // 1. Verify Signature
        bytes32 structHash = keccak256(abi.encode(
            CARPOOL_PAYMENT_TYPEHASH,
            keccak256(bytes(rideId)),
            keccak256(bytes(amount)),
            msg.sender,
            deadline
        ));
        
        bytes32 hash = _hashTypedDataV4(structHash);
        address signer = ECDSA.recover(hash, signature);
        
        require(signer == msg.sender, "Invalid signature");

        // 2. Transfer USDC
        require(usdc.transferFrom(msg.sender, address(this), amountUnits), "USDC transfer failed");

        // 3. Update State
        ridePaid[rideId] = true;
        rideEscrowAmount[rideId] = amountUnits;
        ridePayer[rideId] = msg.sender;

        emit EscrowDeposited(rideId, msg.sender, amountUnits);
    }

    /**
     * @notice Releases escrowed funds to the driver/organizer (Admin only for now).
     */
    function releaseFunds(string memory rideId, address recipient) external onlyOwner {
        require(ridePaid[rideId], "No escrow found");
        uint256 amt = rideEscrowAmount[rideId];
        
        rideEscrowAmount[rideId] = 0;
        ridePaid[rideId] = false; // Prevent re-entrancy/double spend logic

        require(usdc.transfer(recipient, amt), "Transfer failed");
        
        emit EscrowReleased(rideId, recipient, amt);
    }
}

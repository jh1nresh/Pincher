// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../contracts/PincherRideToken.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("USDC", "USDC") {
        _mint(msg.sender, 1000000 * 10**18);
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

contract PincherTest is Test {
    PincherRideToken public pincher;
    MockUSDC public usdc;
    address public owner;
    address public user;
    address public passenger;

    function setUp() public {
        owner = address(this);
        user = address(0x1);
        passenger = address(0x2);

        usdc = new MockUSDC();
        pincher = new PincherRideToken(address(usdc));

        // Fund passenger
        usdc.mint(passenger, 1000 * 10**18);
    }

    function testCreateRide() public {
        uint256 rideId = 1;
        uint256 price = 10 * 10**18;

        pincher.createRide(rideId, price);

        assertEq(pincher.balanceOf(address(pincher), rideId), 4);
        assertEq(pincher.ridePrices(rideId), price);
    }

    function testBuySeat() public {
        uint256 rideId = 1;
        uint256 price = 10 * 10**18; // 10 USDC

        pincher.createRide(rideId, price);

        vm.startPrank(passenger);
        usdc.approve(address(pincher), price);
        pincher.buySeat(rideId);
        vm.stopPrank();

        assertEq(pincher.balanceOf(passenger, rideId), 1);
        assertEq(pincher.balanceOf(address(pincher), rideId), 3);
        assertEq(usdc.balanceOf(address(pincher)), price);
    }

    function testFailBuySeatNoAllowance() public {
        uint256 rideId = 1;
        uint256 price = 10 * 10**18;
        pincher.createRide(rideId, price);

        vm.startPrank(passenger);
        // No approval
        pincher.buySeat(rideId);
        vm.stopPrank();
    }

     function testFailBuySeatInsufficientFunds() public {
        uint256 rideId = 1;
        uint256 price = 2000 * 10**18; // More than balance
        pincher.createRide(rideId, price);

        vm.startPrank(passenger);
        usdc.approve(address(pincher), price);
        pincher.buySeat(rideId);
        vm.stopPrank();
    }
}

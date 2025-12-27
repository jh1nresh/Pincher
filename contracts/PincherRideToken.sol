// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// 🚕 Pincher Ride Token (ERC-1155)
// Each Ride ID = A Token ID.
// 4 Tokens minted per Ride.
contract PincherRideToken is ERC1155, Ownable {
    IERC20 public usdc;
    
    // Mapping from Ride ID to Price (in USDC)
    mapping(uint256 => uint256) public ridePrices;

    constructor(address _usdcAddress) ERC1155("https://api.pincher.ai/metadata/{id}.json") Ownable(msg.sender) {
        usdc = IERC20(_usdcAddress);
    }

    // 1. Organizer creates a Ride -> Mints 4 Seats
    function createRide(uint256 rideId, uint256 pricePerSeat) external {
        // In real app, we might restrict this to registered Organizers
        ridePrices[rideId] = pricePerSeat;
        
        // Mint 4 tickets to the Platform (Escrow) first, or directly to contract to sell?
        // Let's mint to the Contract itself to sell.
        _mint(address(this), rideId, 4, "");
    }

    // 2. Passenger Buys a Seat
    function buySeat(uint256 rideId) external {
        uint256 price = ridePrices[rideId];
        require(price > 0, "Ride not active");
        require(balanceOf(address(this), rideId) > 0, "No seats left");

        // Passenger pays USDC to Contract
        usdc.transferFrom(msg.sender, address(this), price);

        // Contract sends 1 Ticket to Passenger
        _safeTransferFrom(address(this), msg.sender, rideId, 1, "");
    }

    // 3. Trip Finished -> Release Funds to Organizer
    function releaseFunds(uint256 rideId, address organizer) external onlyOwner {
        // ...
    }

    // 4. Admin Mint (For Agent Airdrop)
    function adminMint(address to, uint256 rideId) external onlyOwner {
        _mint(to, rideId, 1, "");
    }
}

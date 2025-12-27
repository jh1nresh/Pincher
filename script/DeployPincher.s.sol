// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../contracts/PincherRideToken.sol";

contract DeployPincher is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("FAUCET_PRIVATE_KEY");
        
        // Base Sepolia USDC
        address usdc = 0x036CbD53842c5426634e7929541eC2318f3dCF7e;

        vm.startBroadcast(deployerPrivateKey);

        PincherRideToken token = new PincherRideToken(usdc);

        console.log("PincherRideToken deployed at:", address(token));

        vm.stopBroadcast();
    }
}

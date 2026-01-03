// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../contracts/PincherEscrow.sol";

contract DeployEscrow is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        // Base Sepolia USDC Address (Native or Bridged)
        // If testing on local anvil, we might need to mock this or deploy a mock token first.
        // For Base Sepolia, we can use a known USDC faucet address or just a placeholder if not interacting yet.
        // Using Base Sepolia USDC (Native): 0x036CbD53842c5426634e7929541eC2318f3dCF7e
        address usdcAddress = 0x036CbD53842c5426634e7929541eC2318f3dCF7e;

        vm.startBroadcast(deployerPrivateKey);

        PincherEscrow escrow = new PincherEscrow(usdcAddress);
        
        console.log("PincherEscrow deployed at:", address(escrow));

        vm.stopBroadcast();
    }
}

import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';

console.log('🤖 Generating new AI Agent Identity...');

// 1. Generate Private Key
const privateKey = generatePrivateKey();

// 2. Derive Account (Address)
const account = privateKeyToAccount(privateKey);

console.log('\n---------------------------------------------');
console.log('✅ AI IDENTITY CREATED');
console.log('---------------------------------------------');
console.log(`📍 Address:      ${account.address}`);
console.log(`🔑 Private Key:  ${privateKey}`);
console.log('---------------------------------------------');
console.log('\nUsage Instructions:');
console.log('1. Copy the Address to your .env file:');
console.log(`   NEXT_PUBLIC_AI_WALLET_ADDRESS=${account.address}`);
console.log('\n2. (Optional) Save the Private Key securely if you want to control funds later.');

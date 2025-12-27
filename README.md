# 🚗 Pincher - Web3 Carpooling Protocol

Pincher is a decentralized ride-sharing application built on **Base Sepolia**. It connects drivers and passengers directly using smart contracts, ensuring trustless payments and lower fees than traditional web2 platforms.

![Pincher App](/public/pincher-v1.5.png)

## ✨ Features

- **Decentralized Payments**: Rides are paid in **USDC** or **ETH**. Funds are held in an on-chain **Escrow Contract** until the ride is completed.
- **Smart Carpooling**: Efficiently matches riders sharing similar routes using a custom matching algorithm.
- **Trustless**: No middleman holding your funds. Code is law.
- **Ride Chat**: Real-time encrypted messaging between driver and passenger after booking.
- **User Profiles**: Manage your identity, balance, and ride history.
- **Faucet Integration**: Built-in faucet to claim testnet USDC/ETH for easy onboarding.

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), TailwindCSS, Google Maps API
- **Smart Contracts**: Solidity, Foundry
- **Blockchain**: Base Sepolia (L2)
- **Authentication**: Privy (Wallet Connection)
- **Database**: Supabase (PostgreSQL) + Realtime
- **Design**: "Uber-Style" Minimalist UI (Black/White/Gray)

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/JhiNResH/Pincher.git
cd Pincher
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

# Privy (Auth)
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id

# Supabase (Database & Realtime)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Faucet (Optional - for local testing)
FAUCET_PRIVATE_KEY=your_private_key
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📜 Smart Contracts

The project uses a **PincherRideToken (ERC1155)** for ride tickets and a custom **Escrow** mechanism.

- **USDC (Base Sepolia)**: `0x036CbD53842c5426634e7929541eC2318f3dCF7e`
- **Escrow/Agent**: `0x...` (Managed via internal API)

## 🧪 Testing

Run strict smart contract tests using Foundry:

```bash
forge test -vv
```

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

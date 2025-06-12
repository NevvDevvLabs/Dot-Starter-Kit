# Dot Starter Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern full-stack dApp development boilerplate for building on Polkadot. This project combines Polkadot and EVM connectivity, enabling developers to interact with native Substrate pallets, precompiles, and deploy Solidity smart contracts.

<p align="center">
  <img src="/images/screenshot.png" alt="Dapp" width="1000" height="auto">
</p>

## Features

### Multi-Wallet Connectivity

- **Polkadot Wallets**: Polkadot.js, Talisman, SubWallet
- **EVM Wallets**: MetaMask, Talisman, WalletConnect

### Substrate Integration

- Interact with native Substrate pallets using connected polkadot wallet.
- Real-time chain state queries

### EVM Smart Contract Support

- Integrated Hardhat environment with Polkadot plugin
- Automatic UI generation from contract ABIs
- Interact with EVM smart contracts using connected EVM wallet.

### Developer Experience

- Modern React + TypeScript + Vite setup
- Styled with Tailwind CSS and shadcn/ui

## Quick Start

### Prerequisites

Before you begin, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- A Polkadot wallet extension installed
- An EVM wallet (MetaMask recommended)

### 1. Clone the repository

```bash
git clone https://github.com/NevvDevvLabs/Dot-Starter-Kit
cd Dot-Starter-Kit
npm i
```

### 2. Get Test Tokens

Go to [polkadot faucet](https://faucet.polkadot.io/?parachain=1111) and claim tokens to your dev wallet

### 3. Smart Contracts Setup

- `cd hardhat`
- `npx hardhat vars set DEPLOYER_PK` (your wallet private key)
- (optional) `npm install --save-dev solc@<WHATEVER-VERSION-YOU-NEED>` (if you need a specific solc version or you get errors regarding your solc version)
- `npx hardhat compile`
- `npx hardhat ignition deploy ./ignition/modules/MyToken.ts --network passetHub`
- `node prepare-contracts.ts`

### 4. Web App

- `cd webapp`
- Setup papi chains in webapp
  - `npx papi add paseo_asset_hub -n paseo_asset_hub`
  - `npx papi add paseo -n paseo`
  - `npx papi`
- create `.env` file and set `VITE_WALLET_CONNECT` env variable
- Start webapp with `npm run dev`
- visit http://localhost:5173 to open the app

## Dyanmic UI For Smart Contracts

**How It Works:**

1. The `prepare-contracts.ts` script should be executed before web app development or build processes after Solidity contracts were compiled and redeployed
2. It reads `deployed_addresses.json` from your Hardhat Ignition deployments
3. It matches these with the corresponding ABIs in the artifacts directory
4. It generates a single `contracts-data.json` file in your `/webapp/src/data` directory
5. The React components import this file directly, avoiding runtime loading issues

### Usage

```bash
# Generate contract data for development chain
node prepareContracts.ts

# Generate contract data for a specific chain
node prepareContracts.ts chain-420420421
```

### Adding New Deployments

When you deploy new contracts:

1. After deployment, your contract artifacts will be in `hardhat/ignition/deployments/chain-[chainId]/`
2. Run the prepare-contracts.ts script for your environment
3. The React app will automatically use the updated contract data

## Network Configuration

The starter kit is configured for:

- **Passet Hub: Smart Contracts** (Testnet)

```bash
Testnet details:
* Network name: Passet Hub
* Chain ID: 420420421
* RPC URL: https://testnet-passet-hub-eth-rpc.polkadot.io
* Block Explorer URL: https://blockscout-passet-hub.parity-testnet.parity.io/
```

## Environment Variables

### Hardhat (`hardhat/.env`)

```env
DEPLOYER_PK=your_private_key_here
```

### Webapp (`webapp/.env`)

```env
VITE_WALLET_CONNECT=your_wallet_connect_project_id
```

### Troubleshooting

If you see "No deployed contracts found" in the UI:

1. Check that the `prepareContracts.ts` script ran successfully
2. Verify that your `deployed_addresses.json` file exists and is correct
3. Check that the `contracts-data.json` file was properly generated in the `/webapp/src/data/` directory
4. Make sure the import path in your React component matches the location of the generated file

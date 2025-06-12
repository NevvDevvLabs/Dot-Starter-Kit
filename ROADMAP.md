# Roadmap

**Vision:**

Create All-In-One Polkadot development starter kit for Full-Stack(Web app + Contract + Backend) Web3 development, development tools for prototyping, testing, debugging and making workflow smooth enough to help projects get to production-ready stage faster.

## Prood Of Concept (Current Stage)

- Hardhat boilerplate with polkadot plugin configured for Passet Testnet
- Web App with Tailwind + Shadcn/ui with configured wallets for Polkadot + EVM
- Auto UI generation with view / read calls based on the ABI of deployed smart contracts from the hardhat project

## MVP

- Automated setup with faucet claim: after running setup script with their chosen wallet, it will automatically set up hardhat env for this wallet and claim tkens from the Passet Testnet faucet without user having to open the website and do it manually
- React Hooks for abstracting Polkadot / EVM integration, making calls to pallets deployed contracts easier

**Blocked By:** Waiting for the initial review of the current features and roadmap

## Debugging Tools

- Visual debugging and testing tools allowing for running either manual or automated tests, inspecting and visualizing state changes, EVM logs and multiple wallets support
- Indexer - backend indexer for more efficient querying of emitted events with example smart contract and indexer integration on the frontend

## UI Kit

- Preconfigured UI building blocks, for example:
  - Dashboard stats badges showing real-time analytics of smart contracts
  - Interactive UI cards with native contracts integration synced with the latest fetched data from view functions and inputs to interact with write functions
  - Token components that can be configured to display and update contract/user balances of specific tokens, real-time token prices

**Blocked By:** Waiting for the initial review of the current features and roadmap

## Parachains

- Seamless cross-chain connectivity abstracting away using multiple parachains and performing XCM under the hood from the user
- Building blocks for developers to integrate XCM into their dapp with react hooks and common utilities

## Precompiles

- Utils / Hooks to interact with deployed precompiles either directly or using Solidity interfaces
- Solidity interfaces for interacting with common deployed precompiles either from the frontend or from other Solidity smart contracts

**Blocked By:** The precompiles are not yet deployed to the Passet Testnet

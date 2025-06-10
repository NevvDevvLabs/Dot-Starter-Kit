# Sample Polkadot Hardhat Project

This project demonstrates how to use Hardhat with Polkadot. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

1. Create a binary of the [`eth-rpc-adapter`](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive/rpc) and move it to `bin` folder at the root of your project. Alternatively, update your configuration file's `adapterConfig.adapterBinaryPath` to point to your local binary. Please check [Polkadot Hardhat docs](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/dev-environments/hardhat/#testing-your-contract).

2. Commands to start a fresh project:

```bash
mkdir hardhat-example
cd hardhat-example
npm init -y
npm install -D @parity/hardhat-polkadot
npx hardhat-polkadot init
```

Then configure the hardhat config as per documentation (linked below).

5. Commands to run the project:

```bash
npm install

npx hardhat vars set DEPLOYER_PK (your EVM private key starting with **0x** prefix)

(optional) npm install --save-dev solc@<WHATEVER-VERSION-YOU-NEED> (if you need a specific solc version or you get errors regarding your solc version)

npx hardhat compile

npx hardhat ignition deploy ./ignition/modules/MyToken.ts --network westendAssetHub
```

6. Development

- Adding new smart contracts
  - Create your contract in `hardhat/contracts/`
  - Create Ignition deployment module e.g. `hardhat/ignition/modules/MyNewContract.ts`
- Adding new interfaces
  - Define your contract interface in `hardhat/interfaces/`
  - Import interface in the contract e.g. `import "../interfaces/IMyNewContract.sol";`

7. Resources:

- [Polkadot Smart Contracts Documentation](https://papermoonio.github.io/polkadot-mkdocs/develop/smart-contracts/)
- [Polkadot Smart Contracts Tutorial](https://papermoonio.github.io/polkadot-mkdocs/tutorials/smart-contracts/)
- [Polkadot Smart Contract Basics](https://papermoonio.github.io/polkadot-mkdocs/polkadot-protocol/smart-contract-basics/)
- [Hardhat-Polkadot Plugin](https://github.com/paritytech/hardhat-polkadot/tree/main/packages/hardhat-polkadot)
- [SubScan Block Explorer for Asset Hub Westend](https://assethub-westend.subscan.io/)
- [Remix for Polkadot](https://remix.polkadot.io/)
- [Old Smart Contract Docs](https://contracts.polkadot.io/)

7. Support Channels:

- [Discord](https://discord.gg/polkadot)
- [Stack Exchange](https://substrate.meta.stackexchange.com/)
- [Telegram](https://t.me/substratedevs)
- [Reddit](https://www.reddit.com/r/Polkadot/)

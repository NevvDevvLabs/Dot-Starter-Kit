import type { HardhatUserConfig, vars } from "hardhat/config";
import "@parity/hardhat-polkadot";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  resolc: {
    compilerSource: "npm",
  },
  networks: {
    hardhat: {
      polkavm: true,
      forking: {
        url: "https://testnet-passet-hub-eth-rpc.polkadot.io",
      },
      adapterConfig: {
        adapterBinaryPath: "./bin/eth-rpc",
        dev: true,
      },
    },
    passetHub: {
      polkavm: true,
      url: "https://testnet-passet-hub-eth-rpc.polkadot.io",
      accounts: [vars.get("DEPLOYER_PK")],
    },
  },
};

export default config;

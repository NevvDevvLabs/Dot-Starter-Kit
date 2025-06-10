import { paseo_asset_hub } from "@polkadot-api/descriptors";
import type { TypedApi } from "polkadot-api";
import { logos } from "../icons/logos";
import { chainSpec as paseoChainSpec } from "polkadot-api/chains/paseo";
import { chainSpec as paseoAssetHubChainSpec } from "polkadot-api/chains/paseo_asset_hub";

export interface ChainSpec {
  name: string;
  id: string;
  chainType: string;
  bootNodes: string[];
  telemetryEndpoints: string[];
  protocolId: string;
  properties: {
    tokenDecimals: number;
    tokenSymbol: string;
  };
  relay_chain: string;
  para_id: number;
  codeSubstitutes: Record<string, string>;
  genesis: {
    stateRootHash: string;
  };
}
export interface ChainConfig {
  key: string;
  name: string;
  descriptors: typeof paseo_asset_hub;
  endpoints: string[];
  explorerUrl?: string;
  icon?: React.ReactNode;
  chainSpec: ChainSpec;
  relayChainSpec?: ChainSpec;
}

export type AvailableApis = TypedApi<typeof paseo_asset_hub>;

// TODO: add all chains your dapp supports here
export const chainConfig: ChainConfig[] = [
  {
    key: "passet",
    name: "Passeo Asset Hub Contracts",
    descriptors: paseo_asset_hub,
    endpoints: ["https://testnet-passet-hub-eth-rpc.polkadot.io"],
    icon: logos.paseoAssethub,
    chainSpec: JSON.parse(paseoAssetHubChainSpec),
    relayChainSpec: JSON.parse(paseoChainSpec),
  },
];

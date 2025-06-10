import { paseo, paseo_asset_hub } from "@polkadot-api/descriptors";
import { defineConfig } from "@reactive-dot/core";
import { createLightClientProvider } from "@reactive-dot/core/providers/light-client.js";
import { InjectedWalletProvider } from "@reactive-dot/core/wallets.js";

const lightClientProvider = createLightClientProvider();

export const config = defineConfig({
  chains: {
    paseo: {
      descriptor: paseo,
      provider: lightClientProvider.addRelayChain({ id: "paseo" }),
    },
    paseo_asset_hub: {
      descriptor: paseo_asset_hub,
      provider: lightClientProvider.addRelayChain({ id: "paseo" }),
    },
  },
  wallets: [new InjectedWalletProvider()],
});

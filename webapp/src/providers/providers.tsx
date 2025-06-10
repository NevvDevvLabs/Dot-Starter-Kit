import "@rainbow-me/rainbowkit/styles.css";
import { ExtensionProvider } from "./polkadot-extension-provider";
import { LightClientApiProvider } from "./lightclient-api-provider";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";

const WALLET_CONNECT = import.meta.env.VITE_WALLET_CONNECT;

const passetHub = {
  id: 420420421,
  name: "Paset Hub",
  network: "passet-hub-smart-contracts",
  nativeCurrency: {
    decimals: 18,
    name: "Paseo",
    symbol: "PAS",
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-passet-hub-eth-rpc.polkadot.io/"],
    },
    public: {
      http: ["https://testnet-passet-hub-eth-rpc.polkadot.io/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Passet Hub Explorer",
      url: "https://blockscout-passet-hub.parity-testnet.parity.io/",
    },
  },
  testnet: true,
} as const;

const config = getDefaultConfig({
  appName: "Dot Starter Kit",
  projectId: WALLET_CONNECT,
  chains: [passetHub],
  ssr: false,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ExtensionProvider>
      <LightClientApiProvider>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>{children}</RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </LightClientApiProvider>
    </ExtensionProvider>
  );
}

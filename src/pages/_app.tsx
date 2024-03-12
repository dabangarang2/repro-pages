import "@/globals.css";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig } from "@privy-io/wagmi";
import { PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth";
import { http } from "viem";
import { PRIVY_APP_ID, RPC_URL, tiltyardChain } from "@/consts";

const queryClient = new QueryClient();

const config = createConfig({
  chains: [tiltyardChain],
  transports: {
    [tiltyardChain.id]: http(RPC_URL),
  },
});

const privyConfig: PrivyClientConfig = {
  appearance: {
    theme: "#450B38",
    logo: "/tiltyard-logo-320x80.png",
    showWalletLoginFirst: false,
    walletList: [
      "detected_wallets",
      "metamask",
      "phantom",
      "rainbow",
      "wallet_connect",
      "coinbase_wallet",
    ],
  },
  supportedChains: [tiltyardChain],
  embeddedWallets: { noPromptOnSignature: true },
  loginMethods: ["email"],
};

export default function App({ Component, pageProps }: AppProps) {
  console.log("App render");
  return (
    <PrivyProvider appId={PRIVY_APP_ID} config={privyConfig}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          <Component {...pageProps} />
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}

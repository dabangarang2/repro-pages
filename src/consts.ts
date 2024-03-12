import { defineChain } from "viem";

export const PRIVY_APP_ID = "clmuo8o3k0171l40fkyvlqfmf";
export const RPC_URL = "https://subnets.avax.network/tiltyard/testnet/rpc";
export const tiltyardChain = defineChain({
  id: 1127469,
  name: "Tiltyard",
  network: "tiltyardtestnet",
  nativeCurrency: {
    decimals: 18,
    name: "Tilt",
    symbol: "TILTG",
  },
  rpcUrls: {
    default: {
      http: [RPC_URL],
    },
    public: {
      http: [RPC_URL],
    },
  },
});

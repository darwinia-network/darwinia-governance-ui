"use client";

import { PropsWithChildren } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "Darwinia Governance",
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || "",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function RainbowProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme({ borderRadius: "small", accentColor: "#FF0083" })}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

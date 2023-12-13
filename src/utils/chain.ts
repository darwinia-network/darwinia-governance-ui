import { crabChain, darwiniaChain, pangolinChain } from "@/config/chains";
import { ChainID, Network } from "@/types";
import { isProduction } from ".";

export function getChainConfig(chainIdOrNetwork: ChainID | Network | null | undefined) {
  switch (chainIdOrNetwork) {
    case ChainID.CRAB:
    case "crab":
      return crabChain;
    case ChainID.DARWINIA:
    case "darwinia":
      return darwiniaChain;
    case ChainID.PANGOLIN:
    case "pangolin":
      return pangolinChain;
  }
}

export function getChainConfigs(askAll?: boolean) {
  const all = [crabChain, darwiniaChain, pangolinChain].sort((a, b) => a.name.localeCompare(b.name));

  if (askAll) {
    return all;
  } else if (isProduction()) {
    return all.filter((c) => !c.hidden && !c.testnet);
  } else {
    return all.filter((c) => !c.hidden && !!c.testnet);
  }
}

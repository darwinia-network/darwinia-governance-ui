import type { Chain as ViemChain } from "viem";

export enum ChainID {
  DARWINIA = 46,
  CRAB = 44,
  PANGOLIN = 43,
  PANGORO = 45,
}

export type Network = "darwinia" | "crab" | "pangolin" | "pangoro";

export interface Chain extends ViemChain {
  /**
   * Chain
   */
  id: ChainID;
  network: Network;

  /**
   * Custom
   */
  logo: string; // File name
  hidden?: boolean;

  /**
   * Substrate
   */
  endpoint: string;
}

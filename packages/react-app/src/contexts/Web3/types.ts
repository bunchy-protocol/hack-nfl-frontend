import { JsonRpcSigner } from "@ethersproject/providers";

export interface ContextValues {
  handleConnect: () => void;
  handleDisconnect: () => void;
  connected: boolean;
  walletAddress?: string;
  wallet?: JsonRpcSigner;
}

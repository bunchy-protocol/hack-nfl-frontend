import { NFT } from "types";

export interface ContextValues {
  nfts: NFT[];
  collatNfts: NFT[];
  collateral: string;
  debt: string;
  collateralizationRatio: string;
  handleDeposit: (amount: string) => void;
  handleDepositNFT: (id: string) => void;
  handleWithdraw: (amount: string) => void;
  handleWithdrawNFT: (id: string) => void;
  handleBorrow: (amount: string) => void;
}

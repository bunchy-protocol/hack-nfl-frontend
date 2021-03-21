import { NFT } from "types";

export interface ContextValues {
  masksForUser: () => Promise<NFT[]>;
  getCollateralizedMask: () => Promise<NFT[]>;
  getCollateral: () => Promise<String>;
  getCollateralizationRatio: () => Promise<String>;
  getDebt: () => Promise<String>;
  handleDeposit: (amount: string) => void;
  handleDepositNFT: (id: string) => void;
  handleWithdraw: (amount: string) => void;
  handleWithdrawNFT: (id: string) => void;
  handleBorrow: (amount: string) => void;
}

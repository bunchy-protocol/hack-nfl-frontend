import { createContext } from "react";
import { ContextValues } from "./types";

const Context = createContext<ContextValues>({
  nfts: [],
  collatNfts: [],
  collateral: "",
  debt: "",
  collateralizationRatio: "",
  handleDeposit: (amount: string) => {},
  handleDepositNFT: (id: string) => {},
  handleWithdraw: (amount: string) => {},
  handleWithdrawNFT: (id: string) => {},
  handleBorrow: (amount: string) => {},
});

export default Context;

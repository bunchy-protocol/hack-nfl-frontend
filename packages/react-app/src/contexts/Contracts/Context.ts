import { createContext } from "react";
import { ContextValues } from "./types";

const Context = createContext<ContextValues>({
  masksForUser: () => {
    return Promise.resolve([]);
  },
  getCollateralizedMask: () => {
    return Promise.resolve([]);
  },
  getCollateral: () => {
    return Promise.resolve("");
  },
  getCollateralizationRatio: () => {
    return Promise.resolve("");
  },
  getDebt: () => {
    return Promise.resolve("");
  },
  handleDeposit: (amount: string) => {},
  handleDepositNFT: (id: string) => {},
  handleWithdraw: (amount: string) => {},
  handleWithdrawNFT: (id: string) => {},
  handleBorrow: (amount: string) => {},
});

export default Context;

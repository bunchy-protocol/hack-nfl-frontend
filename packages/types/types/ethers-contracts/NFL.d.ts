/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface NFLInterface extends ethers.utils.Interface {
  functions: {
    "borrow(uint256)": FunctionFragment;
    "collateralizationRatio(address)": FunctionFragment;
    "debtByUser(address)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "depositByUser(address)": FunctionFragment;
    "depositNFT(uint256)": FunctionFragment;
    "liquidate()": FunctionFragment;
    "liquidator()": FunctionFragment;
    "nft()": FunctionFragment;
    "nftsOf(address)": FunctionFragment;
    "priceFeed()": FunctionFragment;
    "token()": FunctionFragment;
    "totalCollateral(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawNFT(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "borrow",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralizationRatio",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "debtByUser", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositByUser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositNFT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "liquidate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "liquidator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "nftsOf", values: [string]): string;
  encodeFunctionData(functionFragment: "priceFeed", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalCollateral",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawNFT",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collateralizationRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "debtByUser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftsOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawNFT",
    data: BytesLike
  ): Result;

  events: {};
}

export class NFL extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NFLInterface;

  functions: {
    borrow(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "borrow(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    collateralizationRatio(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "collateralizationRatio(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    debtByUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "debtByUser(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deposit(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    depositByUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "depositByUser(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    depositNFT(
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "depositNFT(uint256)"(
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    liquidate(overrides?: Overrides): Promise<ContractTransaction>;

    "liquidate()"(overrides?: Overrides): Promise<ContractTransaction>;

    liquidator(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "liquidator()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    nft(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "nft()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    nftsOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    "nftsOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    priceFeed(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "priceFeed()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    token(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "token()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    totalCollateral(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      balance: BigNumber;
      0: BigNumber;
    }>;

    "totalCollateral(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      balance: BigNumber;
      0: BigNumber;
    }>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawNFT(
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawNFT(uint256)"(
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  borrow(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "borrow(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  collateralizationRatio(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "collateralizationRatio(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  debtByUser(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "debtByUser(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deposit(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deposit(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  depositByUser(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "depositByUser(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositNFT(
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "depositNFT(uint256)"(
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  liquidate(overrides?: Overrides): Promise<ContractTransaction>;

  "liquidate()"(overrides?: Overrides): Promise<ContractTransaction>;

  liquidator(overrides?: CallOverrides): Promise<string>;

  "liquidator()"(overrides?: CallOverrides): Promise<string>;

  nft(overrides?: CallOverrides): Promise<string>;

  "nft()"(overrides?: CallOverrides): Promise<string>;

  nftsOf(user: string, overrides?: CallOverrides): Promise<BigNumber[]>;

  "nftsOf(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  priceFeed(overrides?: CallOverrides): Promise<string>;

  "priceFeed()"(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  totalCollateral(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "totalCollateral(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawNFT(
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawNFT(uint256)"(
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    borrow(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "borrow(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    collateralizationRatio(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collateralizationRatio(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtByUser(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "debtByUser(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "deposit(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositByUser(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "depositByUser(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositNFT(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "depositNFT(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidate(overrides?: CallOverrides): Promise<void>;

    "liquidate()"(overrides?: CallOverrides): Promise<void>;

    liquidator(overrides?: CallOverrides): Promise<string>;

    "liquidator()"(overrides?: CallOverrides): Promise<string>;

    nft(overrides?: CallOverrides): Promise<string>;

    "nft()"(overrides?: CallOverrides): Promise<string>;

    nftsOf(user: string, overrides?: CallOverrides): Promise<BigNumber[]>;

    "nftsOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    priceFeed(overrides?: CallOverrides): Promise<string>;

    "priceFeed()"(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    totalCollateral(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalCollateral(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawNFT(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawNFT(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    borrow(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "borrow(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    collateralizationRatio(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collateralizationRatio(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtByUser(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "debtByUser(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "deposit(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    depositByUser(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "depositByUser(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositNFT(
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "depositNFT(uint256)"(
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    liquidate(overrides?: Overrides): Promise<BigNumber>;

    "liquidate()"(overrides?: Overrides): Promise<BigNumber>;

    liquidator(overrides?: CallOverrides): Promise<BigNumber>;

    "liquidator()"(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    "nft()"(overrides?: CallOverrides): Promise<BigNumber>;

    nftsOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "nftsOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceFeed(overrides?: CallOverrides): Promise<BigNumber>;

    "priceFeed()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalCollateral(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalCollateral(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawNFT(
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawNFT(uint256)"(
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    borrow(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "borrow(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    collateralizationRatio(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collateralizationRatio(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debtByUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "debtByUser(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deposit(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    depositByUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "depositByUser(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositNFT(
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "depositNFT(uint256)"(
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    liquidate(overrides?: Overrides): Promise<PopulatedTransaction>;

    "liquidate()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    liquidator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "liquidator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nft()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftsOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nftsOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "priceFeed()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalCollateral(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalCollateral(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawNFT(
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawNFT(uint256)"(
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}

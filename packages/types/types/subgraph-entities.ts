export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: string;
  BigDecimal: string;
  Bytes: string;
};




export type Token = {
  __typename?: 'Token';
  id: Scalars['ID'];
  decimals?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

export type Transfer = {
  __typename?: 'Transfer';
  id: Scalars['ID'];
  from: Scalars['String'];
  to: Scalars['String'];
  value: Scalars['BigInt'];
};

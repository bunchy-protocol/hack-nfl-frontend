import { abis, addresses } from "@project/contracts";
import { Masks, NFL, Erc20 } from "@project/types";
import { Contract } from "ethers";
import useWeb3 from "hooks/hooks/useWeb3";
import React, { useCallback, useEffect, useState } from "react";
import { Hashmask } from "types";
import Context from "./Context";
import useLoading from "hooks/hooks/useLoading";

const Provider: React.FC = ({ children }) => {
  const { setLoadingMessage } = useLoading();

  const [token, setToken] = useState<Erc20>(
    new Contract(addresses.token, abis.erc20.abi) as Erc20
  );
  const [nfl, setNfl] = useState<NFL>(
    new Contract(addresses.NFL, abis.NFL.abi) as NFL
  );
  const [masks, setMasks] = useState<Masks>(
    new Contract(addresses.masks, abis.masks.abi) as Masks
  );
  const { wallet, walletAddress } = useWeb3();

  useEffect(() => {
    if (!!wallet && !masks.signer) {
      setMasks(masks.connect(wallet));
    }
    if (!!wallet && !nfl.signer) {
      setNfl(nfl.connect(wallet));
    }
    if (!!wallet && !token.signer) {
      setToken(token.connect(wallet));
    }
  }, [setMasks, wallet, masks, setNfl, nfl, setToken, token]);

  const masksForUser = useCallback(async () => {
    if (!walletAddress || !masks.signer) return [];
    const masksForUser = [];
    const balance = Math.min(
      (await masks.balanceOf(walletAddress)).toNumber(),
      30
    );
    for (let index = 0; index < balance; index++) {
      masksForUser.push(
        new Hashmask(
          (await masks.tokenOfOwnerByIndex(walletAddress, index)).toString()
        )
      );
    }
    return masksForUser;
  }, [masks, walletAddress]);

  const getCollateralizedMask = useCallback(async () => {
    if (!walletAddress || !nfl.signer) return [];
    const nfts = await nfl.nftsOf(walletAddress);
    const masksForUser = [];
    const balance = nfts.length;
    for (let index = 0; index < balance; index++) {
      masksForUser.push(new Hashmask(nfts[index].toString()));
    }
    return masksForUser;
  }, [nfl, walletAddress]);

  const getCollateral = useCallback(async () => {
    if (!walletAddress || !nfl.signer) return "0";
    const collateral = await nfl.totalCollateral(walletAddress);
    return collateral.toString();
  }, [nfl, walletAddress]);

  const getCollateralizationRatio = useCallback(async () => {
    if (!walletAddress || !nfl.signer) return "0";
    const ratio = await nfl.collateralizationRatio(walletAddress);
    return ratio.toString();
  }, [nfl, walletAddress]);

  const getDebt = useCallback(async () => {
    if (!walletAddress || !nfl.signer) return "0";
    const debt = await nfl.debtByUser(walletAddress);
    return debt.toString();
  }, [nfl, walletAddress]);

  const handleDeposit = useCallback(
    async (amount: string) => {
      if (!walletAddress || !nfl.signer || !token.signer) return;
      try {
        setLoadingMessage("⏳ Approving...");
        const tx = await token.approve(addresses.NFL, amount);
        await tx.wait();
        setLoadingMessage("⏳ Depositing...");
        await nfl.deposit(amount);
        setLoadingMessage();
      } catch (e) {
        setLoadingMessage();
        console.log(e);
      }
    },
    [nfl, walletAddress, token, setLoadingMessage]
  );

  const handleDepositNFT = useCallback(
    async (id: string) => {
      if (!walletAddress || !masks.signer || !nfl.signer) return;
      try {
        setLoadingMessage("⏳ Approving NFT...");
        const tx = await masks.approve(addresses.NFL, id);
        await tx.wait();
        setLoadingMessage("⏳ Depositing NFT...");
        await nfl.depositNFT(id);
        setLoadingMessage();
      } catch (e) {
        setLoadingMessage();
        console.log(e);
      }
    },
    [nfl, masks, walletAddress, setLoadingMessage]
  );

  const handleWithdraw = useCallback(
    async (amount: string) => {
      if (!walletAddress || !nfl.signer) return;
      try {
        setLoadingMessage("⏳ Withdrawing...");
        await nfl.withdraw(amount);
        setLoadingMessage();
      } catch (e) {
        setLoadingMessage();
        console.log(e);
      }
    },
    [nfl, walletAddress, setLoadingMessage]
  );

  const handleWithdrawNFT = useCallback(
    async (id: string) => {
      if (!walletAddress || !masks.signer || !nfl.signer) return;
      try {
        setLoadingMessage("⏳ Withdrawing...");
        await nfl.withdrawNFT(id);
        setLoadingMessage();
      } catch (e) {
        setLoadingMessage();
        console.log(e);
      }
    },
    [nfl, masks, walletAddress, setLoadingMessage]
  );

  const handleBorrow = useCallback(
    async (amount: string) => {
      if (!walletAddress || !nfl.signer) return;
      try {
        setLoadingMessage("⏳ Borrowing...");
        await nfl.borrow(amount);
        setLoadingMessage();
      } catch (e) {
        setLoadingMessage();
        console.log(e);
      }
    },
    [nfl, walletAddress, setLoadingMessage]
  );

  return (
    <Context.Provider
      value={{
        masksForUser,
        getCollateralizedMask,
        getCollateral,
        getCollateralizationRatio,
        getDebt,
        handleDeposit,
        handleDepositNFT,
        handleWithdraw,
        handleWithdrawNFT,
        handleBorrow,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;

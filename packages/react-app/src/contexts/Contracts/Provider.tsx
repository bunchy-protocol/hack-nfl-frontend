import { abis, addresses } from "@project/contracts";
import { Masks, NFL, Erc20 } from "@project/types";
import { Contract } from "ethers";
import useWeb3 from "hooks/hooks/useWeb3";
import React, { useCallback, useEffect, useState } from "react";
import { Hashmask, NFT } from "types";
import Context from "./Context";
import useLoading from "hooks/hooks/useLoading";

const Provider: React.FC = ({ children }) => {
  const { setLoadingMessage } = useLoading();
  const [version, setVersion] = useState(0);
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [collatNfts, setCollatNfts] = useState<NFT[]>([]);
  const [collateral, setCollateral] = useState("0");
  const [debt, setDebt] = useState("0");
  const [collateralizationRatio, setCollateralizationRatio] = useState("0");
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
        setTimeout(function() {
          setVersion(version + 1);
        }, 5000);
        setLoadingMessage();
      } catch (e) {
        setLoadingMessage();
        console.log(e);
      }
    },
    [nfl, walletAddress, token, setLoadingMessage, setVersion, version]
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
        setTimeout(function() {
          setVersion(version + 1);
        }, 5000);
        setLoadingMessage();
      } catch (e) {
        setLoadingMessage();
        console.log(e);
      }
    },
    [nfl, masks, walletAddress, setLoadingMessage, setVersion, version]
  );

  const handleWithdraw = useCallback(
    async (amount: string) => {
      if (!walletAddress || !nfl.signer) return;
      try {
        setLoadingMessage("⏳ Withdrawing...");
        await nfl.withdraw(amount);
        setTimeout(function() {
          setVersion(version + 1);
        }, 5000);

        setLoadingMessage();
      } catch (e) {
        setLoadingMessage();
        console.log(e);
      }
    },
    [nfl, walletAddress, setLoadingMessage, setVersion, version]
  );

  const handleWithdrawNFT = useCallback(
    async (id: string) => {
      if (!walletAddress || !masks.signer || !nfl.signer) return;
      try {
        setLoadingMessage("⏳ Withdrawing...");
        await nfl.withdrawNFT(id);
        setTimeout(function() {
          setVersion(version + 1);
        }, 5000);

        setLoadingMessage();
      } catch (e) {
        setLoadingMessage();
        console.log(e);
      }
    },
    [nfl, masks, walletAddress, setLoadingMessage, setVersion, version]
  );

  const handleBorrow = useCallback(
    async (amount: string) => {
      if (!walletAddress || !nfl.signer) return;
      try {
        setLoadingMessage("⏳ Borrowing...");
        await nfl.borrow(amount);
        setVersion(version + 1);

        setLoadingMessage();
      } catch (e) {
        setLoadingMessage();
        console.log(e);
      }
    },
    [nfl, walletAddress, setLoadingMessage, setVersion, version]
  );

  useEffect(() => {
    async function fetchTokens() {
      setNfts(await masksForUser());
    }
    async function fetchCollateralizedMask() {
      setCollatNfts(await getCollateralizedMask());
    }
    async function fetchCollateral() {
      setCollateral(await getCollateral());
    }
    async function fetchCollateralizationRatio() {
      setCollateralizationRatio(await getCollateralizationRatio());
    }
    async function fetchDebt() {
      setDebt(await getDebt());
    }
    fetchTokens();
    fetchCollateralizedMask();
    fetchDebt();
    fetchCollateral();
    fetchCollateralizationRatio();
  }, [
    setNfts,
    setCollatNfts,
    setCollateral,
    setDebt,
    setCollateralizationRatio,
    masksForUser,
    getCollateral,
    getCollateralizationRatio,
    getDebt,
    getCollateralizedMask,
    version,
  ]);

  return (
    <Context.Provider
      value={{
        nfts,
        collatNfts,
        collateral,
        debt,
        collateralizationRatio,
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

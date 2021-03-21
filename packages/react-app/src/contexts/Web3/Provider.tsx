import { JsonRpcSigner } from "@ethersproject/providers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import Context from "./Context";

const Provider: React.FC = ({ children }) => {
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | undefined>();
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | undefined>();
  const [wallet, setWallet] = useState<JsonRpcSigner | undefined>();

  const handleConnect = useCallback(async () => {
    web3Modal?.clearCachedProvider();
    const provider = await web3Modal?.connect();
    const newWeb3 = new ethers.providers.Web3Provider(provider);
    const accounts = await newWeb3.listAccounts();
    setConnected(true);
    setWalletAddress(accounts[0]);
    setWallet(newWeb3.getSigner());
    provider.on("accountsChanged", (newAccounts: string[]) => {
      if (Array.isArray(newAccounts) && newAccounts.length) {
        setWalletAddress(newAccounts[0]);
      }
    });
  }, [setWalletAddress, setWallet, web3Modal, setConnected]);

  const handleDisconnect = useCallback(async () => {
    setConnected(false);
    setWalletAddress(undefined);
    setWallet(undefined);
  }, [setConnected, setWalletAddress, setWallet]);

  useEffect(() => {
    async function initWeb3Modal() {
      try {
        if (!web3Modal) {
          const providerOptions = {
            walletconnect: {
              package: WalletConnectProvider,
              options: {
                //TODO put in conf
                infuraId: "34551d538c09417bab045d7ae2b20a83",
              },
            },
          };
          const web3Modal = new Web3Modal({
            cacheProvider: false,
            providerOptions,
            theme: "dark",
          });

          setWeb3Modal(web3Modal);
        }
      } catch (e) {
        console.log(e);
      }
    }
    initWeb3Modal();
  }, [setWeb3Modal, web3Modal]);

  return (
    <Context.Provider
      value={{
        handleConnect,
        handleDisconnect,
        connected,
        walletAddress,
        wallet,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;

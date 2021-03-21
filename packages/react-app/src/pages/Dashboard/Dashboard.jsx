import { Toolbar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AmountCard from "components/AmountCard";
import ActionCard from "components/ActionCard";
import ConnectComposite from "components/ConnectComposite";
import useContracts from "hooks/hooks/useContracts";
import Page from "material-ui-shell/lib/containers/Page";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import NFTList from "./components/NFTList";
import useWeb3 from "hooks/hooks/useWeb3";

const Dashboard = () => {
  const intl = useIntl();
  const { connected } = useWeb3();

  const [nfts, setNfts] = useState([]);
  const [collatNfts, setCollatNfts] = useState([]);
  const [collateral, setCollateral] = useState("0");
  const [debt, setDebt] = useState("0");
  const [collateralizationRatio, setCollateralizationRatio] = useState("0");
  const {
    masksForUser,
    getCollateral,
    getCollateralizationRatio,
    getDebt,
    getCollateralizedMask,
    handleDeposit,
    handleDepositNFT,
    handleWithdrawNFT,
    handleBorrow,
  } = useContracts();

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
  ]);

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: "dashboard",
        defaultMessage: "NFL Dashboard",
      })}
      contentStyle={{ overflow: "hidden" }}
      appBarContent={
        <Toolbar disableGutters>
          <ConnectComposite />
        </Toolbar>
      }
    >
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <AmountCard value={collateral} title="Collateral" />
          <AmountCard value={debt} title="Debt" />
        </Grid>
        <Grid item xs={6}>
          <ActionCard
            deposit={(e) => handleDeposit(e)}
            borrow={(e) => handleBorrow(e)}
            active={connected}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NFTList
            nfts={nfts}
            header="Available NFTs"
            actionLabel="deposit"
            action={handleDepositNFT}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NFTList
            nfts={collatNfts}
            header="Collateralized NFTs"
            actionLabel="withdraw"
            action={handleWithdrawNFT}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Dashboard;

import { Toolbar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ActionCard from "components/ActionCard";
import AmountCard from "components/AmountCard";
import ConnectComposite from "components/ConnectComposite";
import useContracts from "hooks/hooks/useContracts";
import useWeb3 from "hooks/hooks/useWeb3";
import Page from "material-ui-shell/lib/containers/Page";
import React from "react";
import NFTList from "./components/NFTList";

const Dashboard = () => {
  const { connected } = useWeb3();

  const {
    nfts,
    collatNfts,
    collateral,
    debt,
    handleDeposit,
    handleDepositNFT,
    handleWithdrawNFT,
    handleBorrow,
  } = useContracts();

  return (
    <Page
      pageTitle={"NFL Dashboard"}
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

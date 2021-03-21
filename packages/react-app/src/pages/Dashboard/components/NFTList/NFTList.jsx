import { Button, Typography } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1000,
      height: 800,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
    button: {
      marginRight: theme.spacing(1),
    },
  })
);

export default function NFTList({ nfts, header, actionLabel, action }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cols={3} cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
          <ListSubheader component="div">
            <Typography variant="H1">{header}</Typography>
          </ListSubheader>
        </GridListTile>
        {nfts.map((nft) => (
          <GridListTile key={nft.img}>
            <img src={nft.img} alt={nft.id} />
            <GridListTileBar
              title={`#${nft.id}`}
              // subtitle={<span>by: {nft.author}</span>}
              actionIcon={
                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={() => action(nft.id)}
                >
                  {actionLabel}
                </Button>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

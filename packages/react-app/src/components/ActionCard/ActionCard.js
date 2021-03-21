import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 16,
  },
  title: {
    fontSize: 14,
  },
  fullHeightButton: {
    height: "100%",
  },
});

export default function ActionCard({ deposit, borrow, active }) {
  const classes = useStyles();
  const [depositValue, setDepositValue] = useState("");
  const [borrowValue, setBorrowValue] = useState("");
  const [repayValue, setRepayValue] = useState("");

  function handleDepositValueChange(event) {
    setDepositValue(event.target.value);
  }
  function handleBorrowValueChange(event) {
    setBorrowValue(event.target.value);
  }
  function handleRepayValueChange(event) {
    setRepayValue(event.target.value);
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Actions
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Amount"
              onChange={handleDepositValueChange}
              disabled={!active}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              classes={{ root: classes.fullHeightButton }}
              variant="contained"
              onClick={() => deposit(depositValue)}
              disabled={!active}
            >
              Deposit
            </Button>
          </Grid>

          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Amount"
              onChange={handleBorrowValueChange}
              disabled={!active}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              classes={{ root: classes.fullHeightButton }}
              variant="contained"
              onClick={() => borrow(borrowValue)}
              disabled={!active}
            >
              Borrow
            </Button>
          </Grid>

          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Amount"
              onChange={handleRepayValueChange}
              disabled={!active}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              classes={{ root: classes.fullHeightButton }}
              variant="contained"
              onClick={() => deposit(repayValue)}
              disabled={!active}
            >
              Repay
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

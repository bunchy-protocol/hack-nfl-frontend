import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useWeb3 from "hooks/hooks/useWeb3";

const useStyles = makeStyles((theme) => ({
  submit: {
    borderRadius: 24,
    // margin: theme.spacing(3, 0, 2),
  },
}));

export default function ConnectButton() {
  const classes = useStyles();
  const { handleConnect } = useWeb3();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
      onClick={handleConnect}
      // size="large"
    >
      Connect Wallet
    </Button>
  );
}

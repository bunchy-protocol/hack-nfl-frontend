import {Dialog, Slide, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import React from "react";

const dialogStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    minWidth: 275,
    borderRadius: 24,
    textAlign: "center",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WaitingDialog({open, message}) {
  const dialogClasses = dialogStyles();

  return (
    <Dialog
      classes={dialogClasses}
      open={open}
      TransitionComponent={Transition}
    >
      <DialogContent>
        <DialogContentText>
          <Typography variant="h5" component="h5">
            {message}
          </Typography>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

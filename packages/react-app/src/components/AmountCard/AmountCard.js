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

export default function AmountCard({ title, value }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.pos} color="textSecondary">
              {value}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

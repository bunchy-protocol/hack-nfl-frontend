import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

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

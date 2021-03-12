import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgressBars({value}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br />
      <BorderLinearProgress variant="determinate" value={value} />
    </div>
  );
}

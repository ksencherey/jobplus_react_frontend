import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.light,
  },
  container: {
    ...theme.container,
    padding: "5px 0",
  },

  title: {
    fontSize: "19px",
  },
}));

export default function PageTitle(props) {
  const { title } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.title}>{title}</h1>
      </div>
    </div>
  );
}

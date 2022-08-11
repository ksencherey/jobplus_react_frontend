import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
    backgroundColor: theme.palette.common.light,
    border: `1px solid ${theme.palette.common.beta}`,
    boxShadow: `1px 2px 3px 1px ${theme.palette.common.beta}`,
    margin: "0 auto 150px auto",
    marginTop: "20px",
    padding: "25px",
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.palette.common.delta,
    },
    "& .MuiFormGroup-root": {
      marginBottom: "20px",
      "&:last-child": {
        marginBottom: "0px",
      },
    },
    "& .Footer": {
      fontSize: "13px",
      textAlign: "center",
      margin: "0",
    },
  },
}));

export default function PaperForm(props) {
  const classes = useStyles();
  const { children } = props;

  return <div className={classes.root}>{children}</div>;
}

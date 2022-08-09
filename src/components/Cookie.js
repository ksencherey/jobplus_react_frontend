import { AppBar, Collapse, IconButton, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: "100%",
    bottom: "50px",
  },

  standardSuccess: {
    backgroundColor: theme.palette.common.beta,
    color: theme.palette.common.light,
    "& .MuiSvgIcon-root": {
      color: theme.palette.common.light,
    },
  },
}));

export default function Cookie() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleCloseButtonChange = (e) => {
    setOpen(e.target.value);
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Collapse in={open}>
        <Alert
          classes={{ standardSuccess: classes.standardSuccess }}
          action={
            <IconButton
              arial-label="close"
              color="inherit"
              size="small"
              onClick={handleCloseButtonChange}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          JobPlus uses cookies. By continuiing you are agreeing to our use of
          cookies
        </Alert>
      </Collapse>
    </AppBar>
  );
}

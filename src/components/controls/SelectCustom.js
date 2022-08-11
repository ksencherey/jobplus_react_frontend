import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.light,
  },
}));

export default function SelectCustom(props) {
  const classes = useStyles();
  const { items } = props;

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.root}>
      <Select
        labelId="selctor-label"
        id="sector-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value}
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem value={item.name}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

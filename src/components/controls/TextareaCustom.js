import React from "react";
import { TextareaAutosize } from "@material-ui/core";

export default function TextareaCustom(props) {
  //rows =7 is the default
  //this can be just rows the the rows ={rows || 7 used instead of rows={rows}}
   const {placeholder, rows = 7} = props;

  return <TextareaAutosize
            rows={rows}
            placeholder={placeholder}
          />

}

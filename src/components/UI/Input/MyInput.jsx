import React, { memo } from "react";
import classes from "./MyInput.module.css";

const MyInput = memo((props) => {
  return <input className={classes.myInput} {...props} />;
});
export default MyInput;

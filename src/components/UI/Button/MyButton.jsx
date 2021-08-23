import React, { memo } from "react";
import classes from "./MyButton.module.css";

const MyButton = memo(({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
});

export default MyButton;

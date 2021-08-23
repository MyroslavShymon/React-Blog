import React from "react";
import classes from "./MyErrorAlert.module.css";

const MyErrorAlert = ({ children, ...props }) => {
  return (
    <div className={classes.myErrorAlert} {...props}>
      {children}
    </div>
  );
};

export default MyErrorAlert;

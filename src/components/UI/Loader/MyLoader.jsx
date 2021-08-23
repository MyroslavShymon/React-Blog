import React from "react";
import classes from "./MyLoader.module.css";

const MyLoader = () => {
  return (
    <div className={classes["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MyLoader;

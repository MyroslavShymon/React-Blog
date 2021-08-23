import React, { useContext } from "react";
import classes from "./MyNavBar.module.css";
import { Link } from "react-router-dom";
import MyButton from "../Button/MyButton";
import { AuthContext } from "../../context";

const MyNavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__links}>
        <MyButton onClick={() => logout()}>Logout</MyButton>
        <Link to="/about" className={classes.navbar__link}>
          About App
        </Link>
        <Link to="/posts" className={classes.navbar__link}>
          Posts
        </Link>
      </div>
    </nav>
  );
};

export default MyNavBar;

import React, { useState, useContext } from "react";
import { AuthContext } from "./context";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Page for login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter the login" />
        <MyInput type="password" placeholder="Enter the password" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;

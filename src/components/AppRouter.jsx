import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Error from "../pages/Error";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "./context";
import MyLoader from "./UI/Loader/MyLoader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <MyLoader />;
  }

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;

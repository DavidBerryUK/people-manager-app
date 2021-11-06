import { EnumTopLevelRoutes } from "./TopLevelRouteConstants";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../components/pages/homePage/HomePage";
import ListPage from "../../components/pages/listPage/ListPage";
import React from "react";

const TopLevelRoutes: React.SFC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path={EnumTopLevelRoutes.HomePage} component={HomePage} />
      <Route path={EnumTopLevelRoutes.ListPage} component={ListPage} />
    </Switch>
  );
};

export default TopLevelRoutes;

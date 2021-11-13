import { EnumTopLevelRoutes } from "./TopLevelRouteConstants";
import { Route, Switch } from "react-router-dom";
import React, { lazy } from "react";

// enable code splitting for pages
//
const HomePage = lazy(() => import("../../components/pages/homePage/HomePage"));
const ListPage = lazy(() => import("../../components/pages/listPage/ListPage"));

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

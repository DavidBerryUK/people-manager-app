import { EnumTopLevelRoutes } from "./TopLevelRouteConstants";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../components/pages/homePage/HomePage";
import PeopleListPage from "../../components/pages/peopleList/PeopleListPage";
import React from "react";
import SkillListPage from "../../components/pages/skillsList/SkillListPage";
import TeamListPage from "../../components/pages/teamsList/TeamListPage";

const TopLevelRoutes: React.SFC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path={EnumTopLevelRoutes.HomePage} component={HomePage} />
      <Route path={EnumTopLevelRoutes.PeopleListPage} component={PeopleListPage} />
      <Route path={EnumTopLevelRoutes.SkillListPage} component={SkillListPage} />
      <Route path={EnumTopLevelRoutes.TeamListPage} component={TeamListPage} />
    </Switch>
  );
};

export default TopLevelRoutes;

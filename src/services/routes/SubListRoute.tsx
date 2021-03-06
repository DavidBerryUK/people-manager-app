import { EnumTopLevelRoutes } from "./TopLevelRouteConstants";
import { Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router";
import PeopleListPage from "../../components/pages/peopleList/PeopleListPage";
import React from "react";
import SkillListPage from "../../components/pages/skillsList/SkillListPage";
import TeamListPage from "../../components/pages/teamsList/TeamListPage";
import RoleListPage from "../../components/pages/roleList/RoleListPage";

const SubListRoutes: React.FC = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}${EnumTopLevelRoutes.PeopleListPageSubPath}`} component={PeopleListPage} />
      <Route path={`${path}${EnumTopLevelRoutes.SkillListPageSubPath}`} component={SkillListPage} />
      <Route path={`${path}${EnumTopLevelRoutes.TeamListPageSubPath}`} component={TeamListPage} />
      <Route path={`${path}${EnumTopLevelRoutes.RoleListPageSubPath}`} component={RoleListPage} />
    </Switch>
  );
};

export default SubListRoutes;

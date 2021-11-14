import { EnumTopLevelRoutes } from "./TopLevelRouteConstants";
import { Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router";
import React, { lazy } from "react";

// enable code splitting for pages
//
const CustomerListPage = lazy(() => import("../../components/pages/customerList/CustomerListPage"));
const PeopleListPage = lazy(() => import("../../components/pages/peopleList/PeopleListPage"));
const ProjectListPage = lazy(() => import("../../components/pages/projectList/ProjectListPage"));
const RoleListPage = lazy(() => import("../../components/pages/roleList/RoleListPage"));
const SkillListPage = lazy(() => import("../../components/pages/skillsList/SkillListPage"));
const TeamListPage = lazy(() => import("../../components/pages/teamsList/TeamListPage"));

const SubListRoutes: React.FC = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}${EnumTopLevelRoutes.PeopleListPageSubPath}`} component={PeopleListPage} />
      <Route path={`${path}${EnumTopLevelRoutes.SkillListPageSubPath}`} component={SkillListPage} />
      <Route path={`${path}${EnumTopLevelRoutes.TeamListPageSubPath}`} component={TeamListPage} />
      <Route path={`${path}${EnumTopLevelRoutes.RoleListPageSubPath}`} component={RoleListPage} />
      <Route path={`${path}${EnumTopLevelRoutes.ProjectListPageSubPath}`} component={ProjectListPage} />
      <Route path={`${path}${EnumTopLevelRoutes.CustomerListPageSubPath}`} component={CustomerListPage} />
    </Switch>
  );
};

export default SubListRoutes;

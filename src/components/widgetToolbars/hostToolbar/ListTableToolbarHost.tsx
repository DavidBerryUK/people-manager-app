import { EnumToolbar } from "../../../constants/enums/EnumToolbar";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CustomerTableToolBar from "../customerTableToolbar/CustomerTableToolbar";
import PeopleTableToolBar from "../peopleTableToolbar/PeopleTableToolbar";
import ProjectTableToolBar from "../projectTableToolbar/ProjectTableToolbar";
import React from "react";
import RoleTableToolBar from "../roleTableToolbar/RoleTableToolbar";
import SkillTableToolBar from "../skillTableToolbar/SkillTableToolbar";
import TeamTableToolBar from "../teamTableToolbar/TeamTableToolbar";


const ListTableToolbarHost: React.FC = (props) => {
  const { state } = UseListDetailContext();

  const toolbarFactory = (): JSX.Element => {
    switch (state.toolbar) {
      case EnumToolbar.none:
        return <></>;

      case EnumToolbar.customerTable:
        return <CustomerTableToolBar/>

      case EnumToolbar.peopleTable:
        return <PeopleTableToolBar/>

      case EnumToolbar.projectTable:
        return <ProjectTableToolBar/>

      case EnumToolbar.roleTable:
        return <RoleTableToolBar/>

      case EnumToolbar.skillTable:
        return <SkillTableToolBar/>

        case EnumToolbar.teamTable:
            return <TeamTableToolBar/>
    }

    return <></>;
  };

  return <>{toolbarFactory()}</>;
};

export default ListTableToolbarHost;

import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import DetailPersonWidget from "../detailPerson/DetailPersonWidget";
import DetailRoleWidget from "../detailRole/DetailRoleWidget";
import DetailSkillWidget from "../detailSkill/DetailSkillWidget";
import DetailTeamWidget from "../detailTeam/DetailTeamWidget";
import React from "react";

const DetailHostWidget: React.FC = (props) => {
  const { state } = UseListDetailContext();

  const detailWidgetFactory = (): JSX.Element => {
    if (state.personId !== undefined) {
      return <DetailPersonWidget />;
    }
    if (state.teamId !== undefined) {
      return <DetailTeamWidget />;
    }
    if (state.skillId !== undefined) {
      return <DetailSkillWidget />;
    }
    if (state.roleId !== undefined) {
      return <DetailRoleWidget />;
    }
    return <></>;
  };

  return <>{detailWidgetFactory()}</>;
};

export default DetailHostWidget;

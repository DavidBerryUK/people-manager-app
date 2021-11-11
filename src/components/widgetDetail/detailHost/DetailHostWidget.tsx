import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import DetailPersonWidget from "../detailPerson/DetailPersonWidget";
import DetailRoleWidget from "../detailRole/DetailRoleWidget";
import DetailSkillWidget from "../detailSkill/DetailSkillWidget";
import DetailTeamWidget from "../detailTeam/DetailTeamWidget";
import React from "react";
import { EnumDetailViewType } from "../../../constants/enums/EnumDetailViewType";

const DetailHostWidget: React.FC = (props) => {
  const { state } = UseListDetailContext();

  const detailWidgetFactory = (): JSX.Element => {
    switch (state.detailView.viewType) {
      case EnumDetailViewType.person:
        return <DetailPersonWidget />;

      case EnumDetailViewType.team:
        return <DetailTeamWidget />;

      case EnumDetailViewType.skill:
        return <DetailSkillWidget />;

      case EnumDetailViewType.role:
        return <DetailRoleWidget />;
    }

    return <></>;
  };

  return <>{detailWidgetFactory()}</>;
};

export default DetailHostWidget;

import { EnumDetailViewType } from "../../../constants/enums/EnumDetailViewType";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import DetailCustomerWidget from "../detailCustomer/DetailCustomerWidget";
import DetailPersonWidget from "../detailPerson/DetailPersonWidget";
import DetailRoleWidget from "../detailRole/DetailRoleWidget";
import DetailSkillWidget from "../detailSkill/DetailSkillWidget";
import DetailTeamWidget from "../detailTeam/DetailTeamWidget";
import React from "react";
import DetailProjectWidget from "../detailProject/DetailCustomerWidget";

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

      case EnumDetailViewType.customer:
        return <DetailCustomerWidget />;

      case EnumDetailViewType.project:
        return <DetailProjectWidget />;
    }

    return <></>;
  };

  return <>{detailWidgetFactory()}</>;
};

export default DetailHostWidget;

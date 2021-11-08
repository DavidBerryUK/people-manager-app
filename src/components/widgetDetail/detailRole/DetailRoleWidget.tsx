import { EnumIconSize } from "../../../constants/EnumIconSize";
import { EnumPanelJustify } from "../../../constants/EnumPanelJustify";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import ApiRepositoryRole from "../../../apiRepository/role/ApiRepositoryRole";
import ImageRole from "../../widgetsUI/imageRole/ImageRole";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import React, { useMemo, useState } from "react";
import RoleApiModel from "../../../apiRepository/models/RoleApiModel";
import TextSubHeader from "../../widgetTypography/textSubHeader/TextSubHeader";

const DetailRoleWidget: React.FC = () => {
  const { state } = UseListDetailContext();
  const [role, setRole] = useState(new RoleApiModel());

  useMemo(async () => {
    const apiRepositoryRole = new ApiRepositoryRole();
    const role = await apiRepositoryRole.getRoleAsync(state.roleId!);
    setRole(role);
  }, [state.roleId]);

  return (
    <Panel border>
      <PanelHeader>{role.name}</PanelHeader>
      <PanelBody>
        <Panel justify={EnumPanelJustify.center}>
          <ImageRole size={EnumIconSize.large} fileName={role.iconName} />
        </Panel>
        <TextSubHeader>{role.name}</TextSubHeader>
      </PanelBody>
    </Panel>
  );
};

export default DetailRoleWidget;

import { EnumIconSize } from "../../../constants/enums/EnumIconSize";
import { EnumPanelJustify } from "../../../constants/enums/EnumPanelJustify";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import ApiRepositoryRole from "../../../apiRepository/role/ApiRepositoryRole";
import ImageRole from "../../widgetsUI/imageRole/ImageRole";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import PeopleTags from "../../widgetsDataLists/peopleTags/PeopleTags";
import React, { useMemo, useState } from "react";
import RoleApiModel from "../../../apiRepository/models/RoleApiModel";
import TextSubHeader from "../../widgetTypography/textSubHeader/TextSubHeader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const DetailRoleWidget: React.FC = () => {
  const { state } = UseListDetailContext();
  const [role, setRole] = useState(new RoleApiModel());

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();

  useMemo(async () => {
    if (state.detailView.roleId !== role.id) {
      console.log("######################################## DETAIL: GET ROLE #########################");

      console.log(`state role id :${state.detailView.roleId}`);
      console.log(`last role id :${role.id}`);

      const apiRepositoryRole = new ApiRepositoryRole();
      const roleData = await apiRepositoryRole.getRoleAsync(state.detailView.roleId!);
      setRole(roleData);
      writeUrlHistory();
    }
  }, [role.id, state.detailView.roleId, writeUrlHistory]);

  return (
    <Panel border>
      <PanelHeader>{role.name}</PanelHeader>
      <PanelBody>
        <Panel justify={EnumPanelJustify.center}>
          <ImageRole size={EnumIconSize.large} fileName={role.iconName} />
        </Panel>
        <TextSubHeader>{role.name}</TextSubHeader>
        <TextSubHeader>People</TextSubHeader>
        <PeopleTags people={role.people} />
      </PanelBody>
    </Panel>
  );
};

export default DetailRoleWidget;

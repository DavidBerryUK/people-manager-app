import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import React from "react";

const DetailRoleWidget: React.FC = () => {
  const { state } = UseListDetailContext();

  return (
    <Panel>
      <PanelHeader>Detail Role</PanelHeader>
      <PanelBody>person id:{state.roleId}</PanelBody>
    </Panel>
  );
};

export default DetailRoleWidget;

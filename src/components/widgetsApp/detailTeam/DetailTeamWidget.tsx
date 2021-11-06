import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import React from "react";

const DetailTeamWidget: React.FC = () => {
  const { state } = UseListDetailContext();

  return (
    <Panel>
      <PanelHeader>Detail Team</PanelHeader>
      <PanelBody>team id:{state.teamId}</PanelBody>
    </Panel>
  );
};

export default DetailTeamWidget;

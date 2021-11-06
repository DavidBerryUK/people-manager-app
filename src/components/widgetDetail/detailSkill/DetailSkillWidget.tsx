import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import React from "react";

const DetailSkillWidget: React.FC = () => {
  const { state } = UseListDetailContext();

  return (
    <Panel>
      <PanelHeader>Detail Skill</PanelHeader>
      <PanelBody>skill id:{state.skillId}</PanelBody>
    </Panel>
  );
};

export default DetailSkillWidget;

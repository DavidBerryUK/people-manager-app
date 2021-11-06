import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import React from "react";

const DetailPersonWidget: React.FC = () => {
  const { state } = UseListDetailContext();

  return (
    <Panel>
      <PanelHeader>Detail Person</PanelHeader>
      <PanelBody>person id:{state.personId}</PanelBody>
    </Panel>
  );
};

export default DetailPersonWidget;

import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import ApiRepositoryProject from "../../../apiRepository/project/ApiRepositoryProject";
import CustomerTag from "../../widgetTags/customerTag/CustomerTag";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import ProjectApiModel from "../../../apiRepository/entities/ProjectApiModel";
import ProjectStatusTag from "../../widgetTags/projectStatusTag/ProjectStatusTag";
import React, { useMemo, useState } from "react";
import TextSubHeader from "../../widgetTypography/textSubHeader/TextSubHeader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const DetailProjectWidget: React.FC = () => {
  const { state } = UseListDetailContext();
  const [project, setProject] = useState(new ProjectApiModel());

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();

  useMemo(async () => {
    if (state.detailView.projectId !== project.id) {
      console.log("######################################## DETAIL: GET project #########################");
      const apiRepositoryProject = new ApiRepositoryProject();
      const projectData = await apiRepositoryProject.getProjectAsync(state.detailView.projectId!);
      setProject(projectData);
      writeUrlHistory();
    }
  }, [project.id, state.detailView.projectId, writeUrlHistory]);

  return (
    <Panel border>
      <PanelHeader>{project.name}</PanelHeader>
      <PanelBody>
        <TextSubHeader>Customer</TextSubHeader>
        <CustomerTag customer={project.customer} />
        <TextSubHeader>Status</TextSubHeader>
        <ProjectStatusTag projectStatus={project.status} />
      </PanelBody>
    </Panel>
  );
};

export default DetailProjectWidget;

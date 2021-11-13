import { ProjectContextProvider } from "../../../contexts/projectContext/ProjectContext";
import ProjectTableWidget from "../../widgetsDataLists/projectTable/ProjectTableWidget";
import React from "react";

const ProjectListPage: React.FC = () => {
  return (
    <ProjectContextProvider>
      <ProjectTableWidget />
    </ProjectContextProvider>
  );
};

export default ProjectListPage;

import { ProjectContextProvider } from "../../../contexts/projectContext/ProjectContext";
import FilterBar from "../../widgetsUI/filterBar/FilterBar";
import ProjectTableWidget from "../../widgetsDataLists/projectTable/ProjectTableWidget";
import React from "react";

const ProjectListPage: React.FC = () => {
  return (
    <ProjectContextProvider>
      <FilterBar>this is the filter bar for projects</FilterBar>
      <ProjectTableWidget />
    </ProjectContextProvider>
  );
};

export default ProjectListPage;

import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";
import RepositoryProjectListParams from "../../../apiRepository/project/models/RepositoryProjectListParams";
import ProjectRowWidget from "./ProjectRowWidget";
import ProjectTableHeader from "./ProjectTableHeader";
import { useProjectContext } from "../../../contexts/projectContext/ProjectContext";
import ApiRepositoryProjectList from "../../../apiRepository/project/ApiRepositoryProjectList";
import CommandProjectListSet from "../../../contexts/projectContext/actions/CommandProjectListSet";
import CommandPageNumberSet from "../../../contexts/projectContext/actions/CommandPageNumberSet";

const ProjectTableWidget: React.FC = () => {
  const { state: projectState, dispatch: projectDispatch } = useProjectContext();

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();
  useDataTableUrlReader();

  useMemo(async () => {
    var params = new RepositoryProjectListParams(projectState.pagination.sortColumn, projectState.pagination.sortDirection, projectState.pagination.pageNo, projectState.pagination.rowsPerPage);
    if (params.isNotEqualTo(projectState.previousProjectListParameters)) {
      const apiRepositoryProjectList = new ApiRepositoryProjectList();
      const projectList = await apiRepositoryProjectList.getProjectsAsync(params);
      projectDispatch(new CommandProjectListSet(projectList, params));
      writeUrlHistory();
    }
  }, [projectDispatch, projectState.pagination, projectState.previousProjectListParameters, writeUrlHistory]);

  //
  // Event Handlers
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    // update context with new page number to force data reload
    projectDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <ProjectTableHeader />
        <tbody>
          {projectState.projectList.data.map((row, index) => (
            <ProjectRowWidget key={index} project={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={projectState.pagination.pageNo} pageCount={projectState.projectList.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default ProjectTableWidget;

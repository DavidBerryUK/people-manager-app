import { EnumToolbar } from "../../../constants/enums/EnumToolbar";
import { useProjectContext } from "../../../contexts/projectContext/ProjectContext";
import ApiRepositoryProjectList from "../../../apiRepository/project/ApiRepositoryProjectList";
import CommandPageNumberSet from "../../../contexts/projectContext/actions/CommandPageNumberSet";
import CommandProjectListSet from "../../../contexts/projectContext/actions/CommandProjectListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import ProjectRowWidget from "./ProjectRowWidget";
import ProjectTableHeader from "./ProjectTableHeader";
import React, { useMemo } from "react";
import RepositoryProjectListParams from "../../../apiRepository/project/models/RepositoryProjectListParams";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";
import useToolbar from "../../hooks/UseToolbar";

const ProjectTableWidget: React.FC = () => {
  const { state: projectState, dispatch: projectDispatch } = useProjectContext();  
  const { writeUrlHistory } = useDataTableUrlWriter();
  useDataTableUrlReader();
  useToolbar(EnumToolbar.projectTable);

  useMemo(async () => {
    var params = new RepositoryProjectListParams(projectState.pagination.sortColumn, projectState.pagination.sortDirection, projectState.pagination.pageNo, projectState.pagination.rowsPerPage);
    if (params.isNotEqualTo(projectState.previousProjectListParameters)) {
      const apiRepositoryProjectList = new ApiRepositoryProjectList();
      const projectList = await apiRepositoryProjectList.getProjectsAsync(params);
      projectDispatch(new CommandProjectListSet(projectList, params));
      writeUrlHistory();
    }
  }, [projectDispatch, projectState.pagination, projectState.previousProjectListParameters, writeUrlHistory]);
  
  const handleOnPageChangeEvent = (pageNo: number) => {
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

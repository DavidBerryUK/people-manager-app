import { EnumToolbar } from "../../../constants/enums/EnumToolbar";
import { useProjectContext } from "../../../contexts/projectContext/ProjectContext";
import CommandPageNumberSet from "../../../contexts/projectContext/actions/CommandPageNumberSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import ProjectRowWidget from "./ProjectRowWidget";
import ProjectTableHeader from "./ProjectTableHeader";
import React from "react";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useProjectListRepository from "../../hooks/UseProjectListRepository";
import useToolbar from "../../hooks/UseToolbar";

const ProjectTableWidget: React.FC = () => {
  const { state: projectState, dispatch: projectDispatch } = useProjectContext();

  useDataTableUrlReader();
  useToolbar(EnumToolbar.projectTable);
  useProjectListRepository();

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

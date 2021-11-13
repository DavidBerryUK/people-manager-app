import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import React from "react";
import ProjectTableHeaderCellWidget from "./ProjectTableHeaderCellWidget";

const ProjectTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <ProjectTableHeaderCellWidget column={EnumSortColumn.Project}>Project</ProjectTableHeaderCellWidget>
      </tr>
    </thead>
  );
};

export default ProjectTableHeader;

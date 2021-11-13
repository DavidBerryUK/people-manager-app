import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { useProjectContext } from "../../../contexts/projectContext/ProjectContext";
import CommandSortByColumnSet from "../../../contexts/projectContext/actions/CommandSortByColumnSet";
import React from "react";
import TableColumnHeader from "../../widgetsUI/tableColumnHeader/TableColumnHeader";

interface IProperties {
  column: EnumSortColumn;
}

const ProjectTableHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: projectState, dispatch: projectDispatch } = useProjectContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    projectDispatch(new CommandSortByColumnSet(props.column));
  };

  return (
    <TableColumnHeader column={props.column} pagination={projectState.pagination} onClick={handleColumnClickEvent}>
      {props.children}
    </TableColumnHeader>
  );
};

export default ProjectTableHeaderCellWidget;

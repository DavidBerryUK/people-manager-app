import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { useSkillContext } from "../../../contexts/skillContext/SkillContext";
import CommandSortByColumnSet from "../../../contexts/skillContext/actions/CommandSortByColumnSet";
import React from "react";
import TableColumnHeader from "../../widgetsUI/tableColumnHeader/TableColumnHeader";

interface IProperties {
  column: EnumSortColumn;
}

const SkillTableHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: skillState, dispatch: skillDispatch } = useSkillContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    skillDispatch(new CommandSortByColumnSet(props.column));
  };

  return (
    <TableColumnHeader column={props.column} pagination={skillState.pagination} onClick={handleColumnClickEvent}>
      {props.children}
    </TableColumnHeader>
  );
};

export default SkillTableHeaderCellWidget;

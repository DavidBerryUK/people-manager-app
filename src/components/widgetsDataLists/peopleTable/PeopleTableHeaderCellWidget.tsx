import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { usePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import CommandSortByColumnSet from "../../../contexts/peopleContext/actions/CommandSortByColumnSet";
import React from "react";
import TableColumnHeader from "../../widgetsUI/tableColumnHeader/TableColumnHeader";

interface IProperties {
  column: EnumSortColumn;
}

const PeopleTableHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: peopleState, dispatch: peopleDispatch } = usePeopleContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    peopleDispatch(new CommandSortByColumnSet(props.column));
  };

  return (
    <TableColumnHeader column={props.column} pagination={peopleState.pagination} onClick={handleColumnClickEvent}>
      {props.children}
    </TableColumnHeader>
  );
};

export default PeopleTableHeaderCellWidget;

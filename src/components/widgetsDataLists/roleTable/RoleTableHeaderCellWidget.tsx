import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { useRoleContext } from "../../../contexts/roleContext/RoleContext";
import CommandSortByColumnSet from "../../../contexts/roleContext/actions/CommandSortByColumnSet";
import React from "react";
import TableColumnHeader from "../../widgetsUI/tableColumnHeader/TableColumnHeader";

interface IProperties {
  column: EnumSortColumn;
}

const RoleTableHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: roleState, dispatch: roleDispatch } = useRoleContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    roleDispatch(new CommandSortByColumnSet(props.column));
  };

  return (
    <TableColumnHeader column={props.column} pagination={roleState.pagination} onClick={handleColumnClickEvent}>
      {props.children}
    </TableColumnHeader>
  );
};

export default RoleTableHeaderCellWidget;

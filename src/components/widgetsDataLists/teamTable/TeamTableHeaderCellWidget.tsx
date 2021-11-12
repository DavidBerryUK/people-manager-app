import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { useTeamContext } from "../../../contexts/teamContext/TeamContext";
import CommandSortByColumnSet from "../../../contexts/teamContext/actions/CommandSortByColumnSet";
import React from "react";
import TableColumnHeader from "../../widgetsUI/tableColumnHeader/TableColumnHeader";

interface IProperties {
  column: EnumSortColumn;
}

const TeamTableHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: teamState, dispatch: teamDispatch } = useTeamContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    teamDispatch(new CommandSortByColumnSet(props.column));
  };

  return (
    <TableColumnHeader column={props.column} pagination={teamState.pagination} onClick={handleColumnClickEvent}>
      {props.children}
    </TableColumnHeader>
  );
};

export default TeamTableHeaderCellWidget;

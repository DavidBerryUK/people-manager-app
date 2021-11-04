import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { EnumSortDirection } from "../../../constants/EnumSortDirectory";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { UseTeamContext } from "../../../contexts/teamContext/TeamContext";
import CommandSortByColumnSet from "../../../contexts/teamContext/actions/CommandSortByColumnSet";
import React from "react";

interface IProperties {
  column: EnumSortColumn;
}

const TeamListHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: teamState, dispatch: teamDispatch } = UseTeamContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    // update context with new sort order
    teamDispatch(new CommandSortByColumnSet(props.column));
  };

  // Determine Sort Icon for Column
  //
  const sortIcon = (): JSX.Element => {
    if (teamState.sortColumn !== props.column) {
      return <></>;
    }
    if (teamState.sortDirection === EnumSortDirection.asc) {
      return <FaArrowAltCircleDown />;
    }
    return <FaArrowAltCircleUp />;
  };

  return (
    <th onClick={handleColumnClickEvent}>
      <div className="title">{props.children}</div>
      <div className="icon">{sortIcon()}</div>
    </th>
  );
};

export default TeamListHeaderCellWidget;

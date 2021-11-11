import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { useTeamContext } from "../../../contexts/teamContext/TeamContext";
import CommandSortByColumnSet from "../../../contexts/teamContext/actions/CommandSortByColumnSet";
import React from "react";
import SortIndicator from "../../widgetsUI/sortIndicator/SortIndicator";

interface IProperties {
  column: EnumSortColumn;
  sortable?: boolean;
}

const TeamTableHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: teamState, dispatch: teamDispatch } = useTeamContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    if (props.sortable) {
      // update context with new sort order
      teamDispatch(new CommandSortByColumnSet(props.column));
    }
  };

  // Determine Sort Icon for Column
  //
  const sortIcon = (): JSX.Element => {
    if (teamState.pagination.sortColumn !== props.column) {
      return <></>;
    }
    return <SortIndicator direction={teamState.pagination.sortDirection} />;
  };

  // Create Style
  //
  const className = (): string => {
    if (props.sortable === true) {
      return "sortable";
    }
    return "";
  };

  return (
    <th className={className()} onClick={handleColumnClickEvent}>
      <div className="title">{props.children}</div>
      <div className="icon">{sortIcon()}</div>
    </th>
  );
};

export default TeamTableHeaderCellWidget;

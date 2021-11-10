import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { usePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import CommandSortByColumnSet from "../../../contexts/peopleContext/actions/CommandSortByColumnSet";
import React from "react";
import SortIndicator from "../../widgetsUI/sortIndicator/SortIndicator";

interface IProperties {
  column: EnumSortColumn;
  sortable?: boolean;
}

const PeopleTableHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: peopleState, dispatch: peopleDispatch } = usePeopleContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    if (props.sortable) {
      // update context with new sort order
      peopleDispatch(new CommandSortByColumnSet(props.column));
    }
  };

  // Determine Sort Icon for Column
  //
  const sortIcon = (): JSX.Element => {
    if (peopleState.pagination.sortColumn !== props.column) {
      return <></>;
    }
    return <SortIndicator direction={peopleState.pagination.sortDirection} />;
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

export default PeopleTableHeaderCellWidget;

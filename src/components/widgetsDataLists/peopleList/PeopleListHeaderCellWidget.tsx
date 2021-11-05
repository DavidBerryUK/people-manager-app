import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { UsePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import CommandSortByColumnSet from "../../../contexts/peopleContext/actions/CommandSortByColumnSet";
import React from "react";
import SortIndicator from "../../widgetsUI/sortIndicator/SortIndicator";

interface IProperties {
  column: EnumSortColumn;
  sortable?: boolean;
}

const PeopleListHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: peopleState, dispatch: peopleDispatch } = UsePeopleContext();

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
    if (peopleState.sortColumn !== props.column) {
      return <></>;
    }
    return <SortIndicator direction={peopleState.sortDirection} />;
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

export default PeopleListHeaderCellWidget;

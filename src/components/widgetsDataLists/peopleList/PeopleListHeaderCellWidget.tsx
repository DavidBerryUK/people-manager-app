import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { EnumSortDirection } from "../../../constants/EnumSortDirectory";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { UsePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import CommandSortByColumnSet from "../../../contexts/peopleContext/actions/CommandSortByColumnSet";
import React from "react";

interface IProperties {
  column: EnumSortColumn;
}

const PeopleListHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: peopleState, dispatch: peopleDispatch } = UsePeopleContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    // update context with new sort order
    peopleDispatch(new CommandSortByColumnSet(props.column));
  };

  // Determine Sort Icon for Column
  //
  const sortIcon = (): JSX.Element => {
    if (peopleState.sortColumn !== props.column) {
      return <></>;
    }
    if (peopleState.sortDirection === EnumSortDirection.asc) {
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

export default PeopleListHeaderCellWidget;

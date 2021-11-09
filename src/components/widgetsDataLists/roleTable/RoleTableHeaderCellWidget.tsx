import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { UseRoleContext } from "../../../contexts/roleContext/RoleContext";
import CommandSortByColumnSet from "../../../contexts/roleContext/actions/CommandSortByColumnSet";
import React from "react";
import SortIndicator from "../../widgetsUI/sortIndicator/SortIndicator";

interface IProperties {
  column: EnumSortColumn;
  sortable?: boolean;
}

const RoleTableHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: roleState, dispatch: roleDispatch } = UseRoleContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    if (props.sortable) {
      // update context with new sort order
      roleDispatch(new CommandSortByColumnSet(props.column));
    }
  };

  // Determine Sort Icon for Column
  //
  const sortIcon = (): JSX.Element => {
    if (roleState.pagination.sortColumn !== props.column) {
      return <></>;
    }
    return <SortIndicator direction={roleState.pagination.sortDirection} />;
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

export default RoleTableHeaderCellWidget;

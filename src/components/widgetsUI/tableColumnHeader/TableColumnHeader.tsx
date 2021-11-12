import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import PaginationStateModel from "../../../contextsCommonModels/PaginationStateModel";
import React from "react";
import SortIndicator from "../sortIndicator/SortIndicator";

interface IProperties {
  column: EnumSortColumn;
  pagination: PaginationStateModel;
  onClick: () => void;
}

const TableColumnHeader: React.FC<IProperties> = (props) => {
  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    if (props.column !== EnumSortColumn.None) {
      // update context with new sort order
      props.onClick();
    }
  };

  // Determine Sort Icon for Column
  //
  const sortIcon = (): JSX.Element => {
    if (props.column === props.pagination.sortColumn) {
      return <SortIndicator direction={props.pagination.sortDirection} />;
    }
    return <></>;
  };

  // Create Style
  //
  const className = (): string => {
    if (props.column !== EnumSortColumn.None) {
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

export default TableColumnHeader;

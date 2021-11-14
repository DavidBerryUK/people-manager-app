import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { useCustomerContext } from "../../../contexts/customerContext/CustomerContext";
import CommandSortByColumnSet from "../../../contexts/customerContext/actions/CommandSortByColumnSet";
import React from "react";
import TableColumnHeader from "../../widgetsUI/tableColumnHeader/TableColumnHeader";

interface IProperties {
  column: EnumSortColumn;
}

const CustomerTableHeaderCellWidget: React.FC<IProperties> = (props) => {
  const { state: customerState, dispatch: customerDispatch } = useCustomerContext();

  // Event Handlers
  //
  const handleColumnClickEvent = () => {
    customerDispatch(new CommandSortByColumnSet(props.column));
  };

  return (
    <TableColumnHeader column={props.column} pagination={customerState.pagination} onClick={handleColumnClickEvent}>
      {props.children}
    </TableColumnHeader>
  );
};

export default CustomerTableHeaderCellWidget;

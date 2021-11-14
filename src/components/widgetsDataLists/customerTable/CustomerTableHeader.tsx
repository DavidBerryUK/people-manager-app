import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import React from "react";
import CustomerTableHeaderCellWidget from "./CustomerTableHeaderCellWidget";

const CustomerTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <CustomerTableHeaderCellWidget column={EnumSortColumn.Customer}>Customer</CustomerTableHeaderCellWidget>
      </tr>
    </thead>
  );
};

export default CustomerTableHeader;

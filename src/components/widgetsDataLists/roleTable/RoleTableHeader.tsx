import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import React from "react";
import RoleTableHeaderCellWidget from "./RoleTableHeaderCellWidget";

const RoleTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <RoleTableHeaderCellWidget column={EnumSortColumn.None} />
        <RoleTableHeaderCellWidget column={EnumSortColumn.Role}>Role</RoleTableHeaderCellWidget>
        <RoleTableHeaderCellWidget column={EnumSortColumn.None}>Role</RoleTableHeaderCellWidget>
      </tr>
    </thead>
  );
};

export default RoleTableHeader;

import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import React from "react";
import RoleTableHeaderCellWidget from "./RoleTableHeaderCellWidget";

const RoleTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <RoleTableHeaderCellWidget column={EnumSortColumn.Role} sortable>
          Role
        </RoleTableHeaderCellWidget>
        <RoleTableHeaderCellWidget column={EnumSortColumn.PeopleCollection}>Role</RoleTableHeaderCellWidget>
      </tr>
    </thead>
  );
};

export default RoleTableHeader;

import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import PeopleTableHeaderCellWidget from "./PeopleTableHeaderCellWidget";
import React from "react";

const PeopleTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.None}></PeopleTableHeaderCellWidget>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.Forename}>Forename</PeopleTableHeaderCellWidget>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.Surname}>Surname</PeopleTableHeaderCellWidget>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.Role}>Role</PeopleTableHeaderCellWidget>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.Email}>Email</PeopleTableHeaderCellWidget>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.None}>Teams</PeopleTableHeaderCellWidget>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.None}>Skills</PeopleTableHeaderCellWidget>
      </tr>
    </thead>
  );
};

export default PeopleTableHeader;

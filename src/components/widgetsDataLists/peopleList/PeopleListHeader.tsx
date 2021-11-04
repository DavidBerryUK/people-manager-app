import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import PeopleListHeaderCellWidget from "./PeopleListHeaderCellWidget";
import React from "react";

const PeopleListHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <PeopleListHeaderCellWidget column={EnumSortColumn.Forename}>Forename</PeopleListHeaderCellWidget>
        <PeopleListHeaderCellWidget column={EnumSortColumn.Surname}>Surname</PeopleListHeaderCellWidget>
        <PeopleListHeaderCellWidget column={EnumSortColumn.Email}>Email</PeopleListHeaderCellWidget>
        <PeopleListHeaderCellWidget column={EnumSortColumn.Teams}>Teams</PeopleListHeaderCellWidget>
        <PeopleListHeaderCellWidget column={EnumSortColumn.Skills}>Skills</PeopleListHeaderCellWidget>
      </tr>
    </thead>
  );
};

export default PeopleListHeader;

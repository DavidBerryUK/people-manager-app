import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import PeopleTableHeaderCellWidget from "./PeopleTableHeaderCellWidget";
import React from "react";

const PeopleTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.Forename} sortable>
          Forename
        </PeopleTableHeaderCellWidget>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.Surname} sortable>
          Surname
        </PeopleTableHeaderCellWidget>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.Role} sortable>
          Role
        </PeopleTableHeaderCellWidget>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.Email} sortable>
          Email
        </PeopleTableHeaderCellWidget>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.TeamsCollection}>Teams</PeopleTableHeaderCellWidget>
        <PeopleTableHeaderCellWidget column={EnumSortColumn.SkillsCollection}>Skills</PeopleTableHeaderCellWidget>
      </tr>
    </thead>
  );
};

export default PeopleTableHeader;

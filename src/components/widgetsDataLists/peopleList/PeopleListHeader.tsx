import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import PeopleListHeaderCellWidget from "./PeopleListHeaderCellWidget";
import React from "react";

const PeopleListHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <PeopleListHeaderCellWidget column={EnumSortColumn.Forename} sortable>
          Forename
        </PeopleListHeaderCellWidget>
        <PeopleListHeaderCellWidget column={EnumSortColumn.Surname} sortable>
          Surname
        </PeopleListHeaderCellWidget>
        <PeopleListHeaderCellWidget column={EnumSortColumn.Email} sortable>
          Email
        </PeopleListHeaderCellWidget>
        <PeopleListHeaderCellWidget column={EnumSortColumn.TeamsCollection}>Teams</PeopleListHeaderCellWidget>
        <PeopleListHeaderCellWidget column={EnumSortColumn.SkillsCollection}>Skills</PeopleListHeaderCellWidget>
      </tr>
    </thead>
  );
};

export default PeopleListHeader;

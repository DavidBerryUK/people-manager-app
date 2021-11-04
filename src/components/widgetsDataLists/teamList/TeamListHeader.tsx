import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import TeamListHeaderCellWidget from "./TeamListHeaderCellWidget";
import React from "react";

const TeamListHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <TeamListHeaderCellWidget column={EnumSortColumn.Team}>Team</TeamListHeaderCellWidget>
        <TeamListHeaderCellWidget column={EnumSortColumn.PeopleCollection}>People</TeamListHeaderCellWidget>
      </tr>
    </thead>
  );
};

export default TeamListHeader;

import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import TeamTableHeaderCellWidget from "./TeamTableHeaderCellWidget";
import React from "react";

const TeamTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <TeamTableHeaderCellWidget column={EnumSortColumn.None} />
        <TeamTableHeaderCellWidget column={EnumSortColumn.Team} sortable>
          Team
        </TeamTableHeaderCellWidget>
        <TeamTableHeaderCellWidget column={EnumSortColumn.None}>People</TeamTableHeaderCellWidget>
      </tr>
    </thead>
  );
};

export default TeamTableHeader;

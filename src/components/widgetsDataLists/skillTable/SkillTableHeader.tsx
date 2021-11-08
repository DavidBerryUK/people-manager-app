import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import React from "react";
import SkillTableHeaderCellWidget from "./SkillTableHeaderCellWidget";

const SkillTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <SkillTableHeaderCellWidget column={EnumSortColumn.None} />
        <SkillTableHeaderCellWidget column={EnumSortColumn.Skill} sortable>
          Skill
        </SkillTableHeaderCellWidget>
        <SkillTableHeaderCellWidget column={EnumSortColumn.PeopleCollection}>People</SkillTableHeaderCellWidget>
      </tr>
    </thead>
  );
};

export default SkillTableHeader;

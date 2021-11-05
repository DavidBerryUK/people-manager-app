import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import React from "react";
import SkillListHeaderCellWidget from "./SkillListHeaderCellWidget";

const SkillListHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <SkillListHeaderCellWidget column={EnumSortColumn.Skill} sortable>
          Skill
        </SkillListHeaderCellWidget>
        <SkillListHeaderCellWidget column={EnumSortColumn.PeopleCollection}>People</SkillListHeaderCellWidget>
      </tr>
    </thead>
  );
};

export default SkillListHeader;

import { EnumIconSize } from "../../../constants/enums/EnumIconSize";
import ImageSkill from "../../widgetsUI/imageSkill/ImageSkill";
import PeopleSkillTags from "../../widgetTags/peopleTags/PeopleSkillTags";
import React from "react";
import SkillApiModel from "../../../apiRepository/models/SkillApiModel";

interface IProperties {
  skill: SkillApiModel;
}

const SkillRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td>
        {" "}
        <ImageSkill fileName={props.skill.iconName} size={EnumIconSize.small} />
      </td>
      <td> {props.skill.name}</td>
      <td>
        <PeopleSkillTags peopleSkills={props.skill.people} />
      </td>
    </tr>
  );
};

export default SkillRowWidget;

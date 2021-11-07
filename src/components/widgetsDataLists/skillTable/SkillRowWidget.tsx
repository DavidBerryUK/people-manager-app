import React from "react";
import SkillApiModel from "../../../apiRepository/models/SkillApiModel";
import PeopleSkillTags from "../peopleTags/PeopleSkillTags";

interface IProperties {
  skill: SkillApiModel;
}

const SkillRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.skill.name}</td>
      <td>
        <PeopleSkillTags peopleSkills={props.skill.people} />
      </td>
    </tr>
  );
};

export default SkillRowWidget;

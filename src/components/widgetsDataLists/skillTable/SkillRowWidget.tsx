import React from "react";
import SkillApiModel from "../../../apiRepository/models/SkillApiModel";
import PeopleSkillTagsWidget from "../peopleTags/PeopleSkillTagsWidget";

interface IProperties {
  skill: SkillApiModel;
}

const SkillRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.skill.name}</td>
      <td>
        <PeopleSkillTagsWidget peopleSkills={props.skill.people} />
      </td>
    </tr>
  );
};

export default SkillRowWidget;

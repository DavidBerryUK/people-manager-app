import React from "react";
import SkillApiModel from "../../../apiRepository/models/SkillApiModel";

interface IProperties {
  skill: SkillApiModel;
}

const SkillLineWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.skill.name}</td>
      <td></td>
    </tr>
  );
};

export default SkillLineWidget;

import { EnumIconSize } from "../../../constants/enums/EnumIconSize";
import ImageAvatar from "../../widgetsUI/imageAvatar/ImageAvatar";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";
import React from "react";
import RoleTag from "../../widgetTags/roleTag/RoleTag";
import SkillTags from "../../widgetTags/skillTags/SkillTags";
import TeamTags from "../../widgetTags/teamTags/TeamTags";

interface IProperties {
  person: PersonApiModel;
}

const PeopleRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td>
        <ImageAvatar fileName={props.person.iconName} size={EnumIconSize.small} />
      </td>
      <td>{props.person.forename}</td>
      <td>{props.person.surname}</td>
      <td>
        <RoleTag role={props.person.role} />
      </td>
      <td>{props.person.email}</td>
      <td>
        <TeamTags teams={props.person.teams} />
      </td>
      <td>
        <SkillTags skills={props.person.skills} />
      </td>
    </tr>
  );
};

export default PeopleRowWidget;

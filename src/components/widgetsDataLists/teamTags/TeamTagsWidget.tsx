import React from "react";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";
import TeamApiModel from "../../../apiRepository/models/TeamApiModel";

interface IProperties {
  teams: Array<TeamApiModel>;
}

const TeamTagsWidget: React.FC<IProperties> = (props) => {
  return (
    <TagContainer>
      {props.teams.map((team, index) => (
        <Tag key={index}>{team.name}</Tag>
      ))}
    </TagContainer>
  );
};

export default TeamTagsWidget;

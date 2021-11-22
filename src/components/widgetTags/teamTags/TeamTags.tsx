import React from "react";
import TagContainer from "../../widgetsUI/tags/TagContainer";
import TeamApiModel from "../../../apiRepository/entities/TeamApiModel";
import TeamTag from "./TeamTag";

interface IProperties {
  teams: Array<TeamApiModel>;
}

const TeamTags: React.FC<IProperties> = (props) => {
  return (
    <TagContainer>
      {props.teams.map((team) => (
        <TeamTag key={team.id} team={team} />
      ))}
    </TagContainer>
  );
};

export default TeamTags;

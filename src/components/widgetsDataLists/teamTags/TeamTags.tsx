import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowTeam from "../../../contexts/ListDetailContext.tsx/actions/CommandShowTeam";
import React from "react";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";
import TeamApiModel from "../../../apiRepository/models/TeamApiModel";

interface IProperties {
  teams: Array<TeamApiModel>;
}

const TeamTags: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSkillSelectedEvent = (team: TeamApiModel) => {
    dispatch(new CommandShowTeam(team.id));
  };
  return (
    <TagContainer>
      {props.teams.map((team, index) => (
        <Tag
          key={index}
          onClick={() => {
            handleSkillSelectedEvent(team);
          }}
        >
          {team.name}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default TeamTags;

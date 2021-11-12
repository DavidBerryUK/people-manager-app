import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowTeam from "../../../contexts/ListDetailContext.tsx/actions/CommandShowTeam";
import React from "react";
import Tag from "../../widgetsUI/tags/Tag";
import TeamApiModel from "../../../apiRepository/models/TeamApiModel";

interface IProperties {
  team: TeamApiModel;
}

const TeamTag: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSkillSelectedEvent = () => {
    dispatch(new CommandShowTeam(props.team.id));
  };
  return <Tag onClick={handleSkillSelectedEvent}>{props.team.name}</Tag>;
};

export default TeamTag;
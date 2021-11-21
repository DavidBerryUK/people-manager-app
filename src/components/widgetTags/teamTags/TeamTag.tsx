import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowTeam from "../../../contexts/ListDetailContext.tsx/actions/CommandShowTeam";
import React from "react";
import Tag from "../../widgetsUI/tags/Tag";
import TeamApiModel from "../../../apiRepository/entities/TeamApiModel";

interface IProperties {
  team: TeamApiModel;
}

const TeamTag: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSelectedEvent = () => {
    dispatch(new CommandShowTeam(props.team.id));
  };
  return <Tag onClick={handleSelectedEvent}>{props.team.name}</Tag>;
};

export default TeamTag;

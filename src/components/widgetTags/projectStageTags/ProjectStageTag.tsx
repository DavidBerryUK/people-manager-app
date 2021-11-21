import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowProjectStage from "../../../contexts/ListDetailContext.tsx/actions/CommandShowProjectStage";
import ProjectStageApiModel from "../../../apiRepository/entities/ProjectStageApiModel";
import React from "react";
import Tag from "../../widgetsUI/tags/Tag";

interface IProperties {
  projectStage: ProjectStageApiModel;
}

const ProjectStageTag: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSelectedEvent = () => {
    dispatch(new CommandShowProjectStage(props.projectStage.id));
  };
  return <Tag onClick={handleSelectedEvent}>{props.projectStage.name}</Tag>;
};

export default ProjectStageTag;

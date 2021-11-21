import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowProject from "../../../contexts/ListDetailContext.tsx/actions/CommandShowProject";
import ProjectApiModel from "../../../apiRepository/entities/ProjectApiModel";
import React from "react";
import Tag from "../../widgetsUI/tags/Tag";

interface IProperties {
  project: ProjectApiModel;
}

const ProjectTag: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSelectedEvent = () => {
    dispatch(new CommandShowProject(props.project.id));
  };
  return <Tag onClick={handleSelectedEvent}>{props.project.name}</Tag>;
};

export default ProjectTag;

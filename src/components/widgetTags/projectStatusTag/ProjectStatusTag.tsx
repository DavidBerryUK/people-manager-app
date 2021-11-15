import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowProjectStatus from "../../../contexts/ListDetailContext.tsx/actions/CommandShowProjectStatus";
import ProjectStatusApiModel from "../../../apiRepository/entities/ProjectStatusApiModel";
import React from "react";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";

interface IProperties {
  projectStatus: ProjectStatusApiModel;
}

const ProjectStatusTag: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleTagSelectedEvent = () => {
    dispatch(new CommandShowProjectStatus(props.projectStatus.id));
  };

  return (
    <TagContainer>
      <Tag onClick={handleTagSelectedEvent}>{props.projectStatus.name}</Tag>
    </TagContainer>
  );
};

export default ProjectStatusTag;

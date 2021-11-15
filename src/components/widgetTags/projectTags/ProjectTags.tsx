import React from "react";
import TagContainer from "../../widgetsUI/tags/TagContainer";
import ProjectApiModel from "../../../apiRepository/entities/ProjectApiModel";
import ProjectTag from "./ProjectTag";

interface IProperties {
  projects: Array<ProjectApiModel>;
}

const ProjectTags: React.FC<IProperties> = (props) => {
  return (
    <TagContainer>
      {props.projects.map((project, index) => (
        <ProjectTag key={index} project={project} />
      ))}
    </TagContainer>
  );
};

export default ProjectTags;

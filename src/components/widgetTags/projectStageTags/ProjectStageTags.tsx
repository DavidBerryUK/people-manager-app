import React from "react";
import TagContainer from "../../widgetsUI/tags/TagContainer";
import ProjectStageTag from "./ProjectStageTag";
import ProjectStageApiModel from "../../../apiRepository/entities/ProjectStageApiModel";

interface IProperties {
  projectStages: Array<ProjectStageApiModel>;
}

const ProjectStageTags: React.FC<IProperties> = (props) => {
  return (
    <TagContainer>
      {props.projectStages.map((stage, index) => (
        <ProjectStageTag key={index} projectStage={stage} />
      ))}
    </TagContainer>
  );
};

export default ProjectStageTags;
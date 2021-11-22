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
      {props.projectStages.map((stage) => (
        <ProjectStageTag key={stage.id} projectStage={stage} />
      ))}
    </TagContainer>
  );
};

export default ProjectStageTags;

import React from "react";
import ProjectApiModel from "../../../apiRepository/models/ProjectApiModel";

interface IProperties {
  project: ProjectApiModel;
}

const ProjectRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.project.name}</td>
    </tr>
  );
};

export default ProjectRowWidget;

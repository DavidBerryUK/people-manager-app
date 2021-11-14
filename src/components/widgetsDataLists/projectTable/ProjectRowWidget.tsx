import CustomerTag from "../../widgetTags/customerTag/CustomerTag";
import ProjectApiModel from "../../../apiRepository/models/ProjectApiModel";
import React from "react";

interface IProperties {
  project: ProjectApiModel;
}

const ProjectRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.project.name}</td>
      <td>
        {" "}
        <CustomerTag customer={props.project.customer} />
      </td>
    </tr>
  );
};

export default ProjectRowWidget;

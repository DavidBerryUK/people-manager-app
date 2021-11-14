import CustomerTag from "../../widgetTags/customerTag/CustomerTag";
import ProjectApiModel from "../../../apiRepository/models/ProjectApiModel";
import React from "react";
import ProjectStatusTag from "../../widgetTags/projectStatusTag/ProjectStatusTag";

interface IProperties {
  project: ProjectApiModel;
}

const ProjectRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.project.name}</td>
      <td>
        {" "}
        <ProjectStatusTag projectStatus={props.project.status} />
      </td>
      <td>
        <CustomerTag customer={props.project.customer} />
      </td>
    </tr>
  );
};

export default ProjectRowWidget;

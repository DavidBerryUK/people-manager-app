import React from "react";
import CustomerApiModel from "../../../apiRepository/entities/CustomerApiModel";
import ProjectTags from "../../widgetTags/projectTags/ProjectTags";

interface IProperties {
  customer: CustomerApiModel;
}

const CustomerRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.customer.name}</td>
      <td>
        <ProjectTags projects={props.customer.projects} />{" "}
      </td>
    </tr>
  );
};

export default CustomerRowWidget;

import React from "react";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";

interface IProperties {
  person: PersonApiModel;
}

const PeopleLineWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.person.forename}</td>
      <td> {props.person.surname}</td>
      <td> {props.person.email}</td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default PeopleLineWidget;

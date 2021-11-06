import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import React from "react";

const DetailHostWidget: React.FC = (props) => {
  const { state } = UseListDetailContext();

  return (
    <>
      <h1>Detail Host Widget</h1>
      <h4>person id:{state.personId}</h4>
      <h4>team id:{state.teamId}</h4>
      <h4>role id:{state.roleId}</h4>
      <h4>skill id:{state.skillId}</h4>
      {props.children}
    </>
  );
};

export default DetailHostWidget;

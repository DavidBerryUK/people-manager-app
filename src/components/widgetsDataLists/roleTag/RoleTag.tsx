import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import React from "react";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";
import RoleApiModel from "../../../apiRepository/models/RoleApiModel";
import CommandShowRole from "../../../contexts/ListDetailContext.tsx/actions/CommandShowRole";

interface IProperties {
  role: RoleApiModel;
}

const RoleTag: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSkillSelectedEvent = () => {
    dispatch(new CommandShowRole(props.role.id));
  };

  return (
    <TagContainer>
      <Tag onClick={handleSkillSelectedEvent}>{props.role.name}</Tag>
    </TagContainer>
  );
};

export default RoleTag;

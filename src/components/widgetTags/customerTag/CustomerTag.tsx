import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowCustomer from "../../../contexts/ListDetailContext.tsx/actions/CommandShowCustomer";
import CustomerModel from "../../../apiRepository/entities/CustomerApiModel";
import React from "react";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";

interface IProperties {
  customer: CustomerModel;
}

const CustomerTag: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSkillSelectedEvent = () => {
    dispatch(new CommandShowCustomer(props.customer.id));
  };

  return (
    <TagContainer>
      <Tag onClick={handleSkillSelectedEvent}>{props.customer.name}</Tag>
    </TagContainer>
  );
};

export default CustomerTag;

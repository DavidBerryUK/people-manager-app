import { EnumSortDirection } from "../../../constants/enums/EnumSortDirection";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import React from "react";

interface IProperties {
  direction: EnumSortDirection;
}

const SortIndicator: React.FC<IProperties> = (props) => {
  if (props.direction === EnumSortDirection.asc) {
    return <FaArrowAltCircleUp />;
  }

  return <FaArrowAltCircleDown />;
};

export default SortIndicator;

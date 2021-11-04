import { EnumButtonType } from "../../../styles/components/EnumButtonType";
import { FaBackward, FaFastBackward, FaFastForward, FaForward, FaStepForward } from "react-icons/fa";
import React from "react";

interface IProperties {
  type: EnumButtonType;
  pageNumber: number;
  enabled?: boolean;
  selected?: boolean;
  onClick: (page: number) => void;
}

const PaginationButton: React.FC<IProperties> = (props) => {
  const buttonContent = (): JSX.Element => {
    if (props.type === EnumButtonType.First) {
      return <FaFastBackward />;
    }
    if (props.type === EnumButtonType.SkipPrevious) {
      return <FaBackward />;
    }
    if (props.type === EnumButtonType.Previous) {
      return <FaBackward />;
    }
    if (props.type === EnumButtonType.Next) {
      return <FaForward />;
    }
    if (props.type === EnumButtonType.SkipNext) {
      return <FaStepForward />;
    }
    if (props.type === EnumButtonType.Last) {
      return <FaFastForward />;
    }
    return <>{props.pageNumber}</>;
  };

  const buttonTitle = (): string => {
    if (props.type === EnumButtonType.First) {
      return "First Page";
    }
    if (props.type === EnumButtonType.SkipPrevious) {
      return "Jump Backward";
    }
    if (props.type === EnumButtonType.Previous) {
      return "Previous Page";
    }
    if (props.type === EnumButtonType.Next) {
      return "Next Page";
    }
    if (props.type === EnumButtonType.SkipNext) {
      return "Jump Forwards";
    }
    if (props.type === EnumButtonType.Last) {
      return "Last Page";
    }
    return `Page ${props.pageNumber}`;
  };

  return (
    <div className="pagination-button" title={buttonTitle()}>
      {buttonContent()}
    </div>
  );
};

export default PaginationButton;

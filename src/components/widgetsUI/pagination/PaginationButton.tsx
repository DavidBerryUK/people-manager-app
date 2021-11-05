import { EnumButtonType } from "./EnumButtonType";
import { FaBackward, FaFastBackward, FaFastForward, FaForward, FaStepForward } from "react-icons/fa";
import React from "react";

interface IProperties {
  type: EnumButtonType;
  pageNumber: number;
  enabled?: boolean;
  selected?: boolean;
  onPageSelected: (page: number) => void;
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

  // event handlers
  //
  const handleButtonClickEvent = () => {
    props.onPageSelected(props.pageNumber);
  };

  const getClassName = (): string => {
    if (props.selected === true) {
      return "pagination-button selected";
    }
    if (props.enabled === false) {
      return "pagination-button disabled";
    }
    return "pagination-button";
  };

  return (
    <div className={getClassName()} title={buttonTitle()} onClick={handleButtonClickEvent}>
      {buttonContent()}
    </div>
  );
};

export default PaginationButton;

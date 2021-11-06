import React from "react";

interface IProperties {
  onClick?: () => void;
}

const Tag: React.FC<IProperties> = (props) => {
  // click event handler
  const handleOnClickEvent = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div className="tag" onClick={handleOnClickEvent}>
      {props.children}
    </div>
  );
};

export default Tag;

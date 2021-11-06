import React from "react";
import "./Styles.scss";

const LayoutList: React.FC = (props) => {
  return <div className="layout-list">{props.children}</div>;
};

export default LayoutList;

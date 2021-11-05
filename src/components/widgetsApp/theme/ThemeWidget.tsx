import React from "react";
import { UseApplicationContext } from "../../../contexts/applicationContext/ApplicationContext";

const ThemeWidget: React.FC = (props) => {
  const { state: applicationState } = UseApplicationContext();

  const className = (): string => {
    return applicationState.theme;
  };

  return <div className={className()}>{props.children}</div>;
};

export default ThemeWidget;

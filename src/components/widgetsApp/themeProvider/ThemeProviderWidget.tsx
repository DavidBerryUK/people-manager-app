import React from "react";
import { UseApplicationContext } from "../../../contexts/applicationContext/ApplicationContext";

const ThemeProviderWidget: React.FC = (props) => {
  const { state: applicationState } = UseApplicationContext();

  const rootElement = document.getElementById("document-root");
  if (rootElement) {
    rootElement!.className = applicationState.theme;
  }

  return <>{props.children}</>;
};

export default ThemeProviderWidget;

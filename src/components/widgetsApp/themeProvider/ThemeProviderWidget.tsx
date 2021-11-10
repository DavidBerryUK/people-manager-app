import React from "react";
import { useApplicationContext } from "../../../contexts/applicationContext/ApplicationContext";

const ThemeProviderWidget: React.FC = (props) => {
  const { state: applicationState } = useApplicationContext();

  const rootElement = document.getElementById("document-root");
  if (rootElement) {
    rootElement!.className = applicationState.theme;
  }

  return <>{props.children}</>;
};

export default ThemeProviderWidget;

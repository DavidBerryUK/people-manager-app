import { useHistory, useLocation } from "react-router";
import FactoryNavButtons from "./factories/FactoryNavButtons";
import NavButtonModel from "./models/NavButtonModel";
import React from "react";
import ThemeSelectorWidget from "../themeSelector/ThemeSelectorWidget";

const ApplicationHeaderWidget: React.FC = () => {
  const history = useHistory();
  const currentPath = useLocation().pathname;
  // get list of buttons to render
  const navButtons = FactoryNavButtons.get();

  // Event Handlers
  const handleSelectedEvent = (button: NavButtonModel) => {
    history.push(button.route);
  };

  // Render Helpers
  const getClassName = (button: NavButtonModel): string => {
    if (button.route === currentPath) {
      return "selected";
    }
    return "";
  };

  return (
    <div className="application-header">
      <ul className="navigation">
        {navButtons.map((button) => (
          <li
            key={button.title}
            className={getClassName(button)}
            onClick={() => {
              handleSelectedEvent(button);
            }}
          >
            {button.title}
          </li>
        ))}
      </ul>
      <ThemeSelectorWidget />
    </div>
  );
};

export default ApplicationHeaderWidget;

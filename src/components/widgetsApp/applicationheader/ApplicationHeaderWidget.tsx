import { useHistory, useLocation } from "react-router";
import FactoryNavButtons from "./factories/FactoryNavButtons";
import NavButtonModel from "./models/NavButtonModel";
import React from "react";

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
    <ul className="navigation">
      {navButtons.map((button, index) => (
        <li
          key={index}
          className={getClassName(button)}
          onClick={() => {
            handleSelectedEvent(button);
          }}
        >
          {button.title}
        </li>
      ))}
    </ul>
  );
};

export default ApplicationHeaderWidget;

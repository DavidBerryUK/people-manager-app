import { UseApplicationContext } from "../../../contexts/applicationContext/ApplicationContext";
import CommandThemeSet from "../../../contexts/applicationContext/actions/CommandThemeSet";
import React from "react";
import ThemeConfigModel from "./models/ThemeConfigModel";

interface IProperties {
  theme: ThemeConfigModel;
}

const ThemeButtonWidget: React.FC<IProperties> = (props) => {
  const { dispatch: applicationDispatch } = UseApplicationContext();

  const handleSelectThemeClick = () => {
    applicationDispatch(new CommandThemeSet(props.theme.theme));
  };

  const className = (): string => {
    return `${props.theme.theme}-theme-button`;
  };

  return <div className={className()} onClick={handleSelectThemeClick} title={props.theme.name} />;
};

export default ThemeButtonWidget;

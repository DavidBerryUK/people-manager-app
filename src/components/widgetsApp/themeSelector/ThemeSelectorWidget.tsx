import FactoryThemes from "./FactoryThemes";
import React from "react";

import ThemeButtonWidget from "./ThemeButtonWidget";

const ThemeSelectorWidget: React.FC = () => {
  const themes = FactoryThemes.get();

  return (
    <div className="theme-selector">
      {themes.map((theme) => (
        <ThemeButtonWidget key={theme.name} theme={theme} />
      ))}
    </div>
  );
};

export default ThemeSelectorWidget;

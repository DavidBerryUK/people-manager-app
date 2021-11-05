import { ApplicationContextProvider } from "../../contexts/applicationContext/ApplicationContext";
import ApplicationHeaderWidget from "../widgetsApp/applicationheader/ApplicationHeaderWidget";
import React from "react";

import TopLevelRoutes from "../../services/routes/TopLevelRoute";
import ThemeProviderWidget from "../widgetsApp/themeProvider/ThemeProviderWidget";

const App: React.FC = () => {
  return (
    <ApplicationContextProvider>
      <ThemeProviderWidget>
        <ApplicationHeaderWidget />
        <TopLevelRoutes />
      </ThemeProviderWidget>
    </ApplicationContextProvider>
  );
};

export default App;

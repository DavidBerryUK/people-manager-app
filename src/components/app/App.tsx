import { ApplicationContextProvider } from "../../contexts/applicationContext/ApplicationContext";
import ApplicationHeaderWidget from "../widgetsApp/applicationheader/ApplicationHeaderWidget";
import React from "react";

import TopLevelRoutes from "../../services/routes/TopLevelRoute";
import ThemeWidget from "../widgetsApp/theme/ThemeWidget";

const App: React.FC = () => {
  return (
    <ApplicationContextProvider>
      <ThemeWidget>
        <ApplicationHeaderWidget />
        <TopLevelRoutes />
      </ThemeWidget>
    </ApplicationContextProvider>
  );
};

export default App;

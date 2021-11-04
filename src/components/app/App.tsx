import { ApplicationContextProvider } from "../../contexts/applicationContext/ApplicationContext";
import ApplicationHeaderWidget from "../widgetsApp/applicationheader/ApplicationHeaderWidget";
import React from "react";
import { IconName } from "react-icons/fa";
import TopLevelRoutes from "../../services/routes/TopLevelRoute";

const App: React.FC = () => {
  return (
    <ApplicationContextProvider>
      <ApplicationHeaderWidget />
      <TopLevelRoutes />
    </ApplicationContextProvider>
  );
};

export default App;

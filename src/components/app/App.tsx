import { ApplicationContextProvider } from "../../contexts/applicationContext/ApplicationContext";

import React from "react";

const App: React.FC = () => {
  return <ApplicationContextProvider>this is the app</ApplicationContextProvider>;
};

export default App;

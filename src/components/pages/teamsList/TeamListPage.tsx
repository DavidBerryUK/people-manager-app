import { TeamContextProvider } from "../../../contexts/teamContext/TeamContext";
import React from "react";
import TeamTableWidget from "../../widgetsDataLists/teamTable/TeamTableWidget";

const TeamListPage: React.FC = () => {
  return (
    <TeamContextProvider>
      <TeamTableWidget />
    </TeamContextProvider>
  );
};

export default TeamListPage;

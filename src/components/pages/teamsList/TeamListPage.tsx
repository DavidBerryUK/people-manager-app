import React from "react";
import { TeamContextProvider } from "../../../contexts/teamContext/TeamContext";
import TeamListWidget from "../../widgetsDataLists/teamList/TeamListWidget";

const TeamListPage: React.FC = () => {
  return (
    <TeamContextProvider>
      <TeamListWidget />
    </TeamContextProvider>
  );
};

export default TeamListPage;

import { TeamContextProvider } from "../../../contexts/teamContext/TeamContext";
import React from "react";
import TeamListWidget from "../../widgetsDataLists/teamList/TeamListWidget";

const TeamListPage: React.FC = () => {
  return (
    <TeamContextProvider>
      <TeamListWidget />
    </TeamContextProvider>
  );
};

export default TeamListPage;

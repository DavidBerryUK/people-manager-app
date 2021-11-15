import { TeamContextProvider } from "../../../contexts/teamContext/TeamContext";
import FilterBar from "../../widgetsUI/filterBar/FilterBar";
import React from "react";
import TeamTableWidget from "../../widgetsDataLists/teamTable/TeamTableWidget";

const TeamListPage: React.FC = () => {
  return (
    <TeamContextProvider>
      <FilterBar>this is the filter bar for teams</FilterBar>
      <TeamTableWidget />
    </TeamContextProvider>
  );
};

export default TeamListPage;

import { RoleContextProvider } from "../../../contexts/roleContext/RoleContext";
import FilterBar from "../../widgetsUI/filterBar/FilterBar";
import React from "react";
import RoleTableWidget from "../../widgetsDataLists/roleTable/RoleTableWidget";

const RoleListPage: React.FC = () => {
  return (
    <RoleContextProvider>
      <FilterBar>this is the filter bar for roles</FilterBar>
      <RoleTableWidget />
    </RoleContextProvider>
  );
};

export default RoleListPage;

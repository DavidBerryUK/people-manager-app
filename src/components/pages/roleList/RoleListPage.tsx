import { RoleContextProvider } from "../../../contexts/roleContext/RoleContext";
import React from "react";
import RoleTableWidget from "../../widgetsDataLists/roleTable/RoleTableWidget";

const RoleListPage: React.FC = () => {
  return (
    <RoleContextProvider>
      <RoleTableWidget />
    </RoleContextProvider>
  );
};

export default RoleListPage;

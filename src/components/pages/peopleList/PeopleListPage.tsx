import { PeopleContextProvider } from "../../../contexts/peopleContext/PeopleContext";
import FilterBar from "../../widgetsUI/filterBar/FilterBar";
import PeopleTableWidget from "../../widgetsDataLists/peopleTable/PeopleTableWidget";
import React from "react";

const PeopleListPage: React.FC = () => {
  return (
    <PeopleContextProvider>
      <FilterBar>this is the filter bar for Teams</FilterBar>
      <PeopleTableWidget />
    </PeopleContextProvider>
  );
};

export default PeopleListPage;

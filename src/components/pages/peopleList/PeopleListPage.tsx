import { PeopleContextProvider } from "../../../contexts/peopleContext/PeopleContext";
import PeopleTableWidget from "../../widgetsDataLists/peopleTable/PeopleTableWidget";
import React from "react";

const PeopleListPage: React.FC = () => {
  return (
    <PeopleContextProvider>
      <PeopleTableWidget />
    </PeopleContextProvider>
  );
};

export default PeopleListPage;

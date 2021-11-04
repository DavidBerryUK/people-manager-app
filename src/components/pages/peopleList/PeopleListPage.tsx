import React from "react";
import { PeopleContextProvider } from "../../../contexts/peopleContext/PeopleContext";
import PeopleListWidget from "../../widgetsDataLists/peopleList/PeopleListWidget";

const PeopleListPage: React.FC = () => {
  return (
    <PeopleContextProvider>
      <PeopleListWidget />
    </PeopleContextProvider>
  );
};

export default PeopleListPage;

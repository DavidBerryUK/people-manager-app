import { PeopleContextProvider } from "../../../contexts/peopleContext/PeopleContext";
import PeopleListWidget from "../../widgetsDataLists/peopleList/PeopleListWidget";
import React from "react";

const PeopleListPage: React.FC = () => {
  return (
    <PeopleContextProvider>
      <PeopleListWidget />
    </PeopleContextProvider>
  );
};

export default PeopleListPage;

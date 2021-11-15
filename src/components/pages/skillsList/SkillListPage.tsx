import { SkillContextProvider } from "../../../contexts/skillContext/SkillContext";
import FilterBar from "../../widgetsUI/filterBar/FilterBar";
import React from "react";
import SkillTableWidget from "../../widgetsDataLists/skillTable/SkillTableWidget";

const SkillListPage: React.FC = () => {
  return (
    <SkillContextProvider>
      <FilterBar>this is the filter bar for skills</FilterBar>
      <SkillTableWidget />
    </SkillContextProvider>
  );
};

export default SkillListPage;

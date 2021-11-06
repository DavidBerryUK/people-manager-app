import { SkillContextProvider } from "../../../contexts/skillContext/SkillContext";
import React from "react";
import SkillTableWidget from "../../widgetsDataLists/skillTable/SkillTableWidget";

const SkillListPage: React.FC = () => {
  return (
    <SkillContextProvider>
      <SkillTableWidget />
    </SkillContextProvider>
  );
};

export default SkillListPage;

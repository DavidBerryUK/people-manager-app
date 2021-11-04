import { SkillContextProvider } from "../../../contexts/skillContext/SkillContext";
import React from "react";
import SkillListWidget from "../../widgetsDataLists/skillList/SkillListWidget";

const SkillListPage: React.FC = () => {
  return (
    <SkillContextProvider>
      <SkillListWidget />
    </SkillContextProvider>
  );
};

export default SkillListPage;

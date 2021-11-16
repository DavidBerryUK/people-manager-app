import { EnumToolbar } from "../../../constants/enums/EnumToolbar";
import { useSkillContext } from "../../../contexts/skillContext/SkillContext";
import ApiRepositorySkillList from "../../../apiRepository/skills/ApiRepositorySkillList";
import CommandPageNumberSet from "../../../contexts/skillContext/actions/CommandPageNumberSet";
import CommandSkillListSet from "../../../contexts/skillContext/actions/CommandSkillListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import RepositorySkillListParams from "../../../apiRepository/skills/models/RepositorySkillListParams";
import SkillRowWidget from "./SkillRowWidget";
import SkillTableHeader from "./SkillTableHeader";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";
import useToolbar from "../../hooks/UseToolbar";

const SkillTableWidget: React.FC = () => {
  const { state: skillState, dispatch: skillDispatch } = useSkillContext();

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();
  useDataTableUrlReader();
  useToolbar(EnumToolbar.skillTable);

  useMemo(async () => {
    var params = new RepositorySkillListParams(skillState.pagination.sortColumn, skillState.pagination.sortDirection, skillState.pagination.pageNo, skillState.pagination.rowsPerPage);
    if (params.isNotEqualTo(skillState.previousSkillListParameters)) {
      const apiRepositorySkillList = new ApiRepositorySkillList();
      const skillList = await apiRepositorySkillList.getSkillsAsync(params);
      skillDispatch(new CommandSkillListSet(skillList, params));
      writeUrlHistory();
    }
  }, [skillDispatch, skillState.pagination, skillState.previousSkillListParameters, writeUrlHistory]);
  
  const handleOnPageChangeEvent = (pageNo: number) => {
    skillDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <SkillTableHeader />
        <tbody>
          {skillState.skillList.data.map((row, index) => (
            <SkillRowWidget key={index} skill={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={skillState.pagination.pageNo} pageCount={skillState.skillList.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default SkillTableWidget;

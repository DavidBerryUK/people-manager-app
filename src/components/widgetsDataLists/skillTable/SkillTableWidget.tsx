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

const SkillTableWidget: React.FC = () => {
  const { state: skillState, dispatch: skillDispatch } = useSkillContext();

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();
  useDataTableUrlReader();

  useMemo(async () => {
    var params = new RepositorySkillListParams(skillState.pagination.sortColumn, skillState.pagination.sortDirection, skillState.pagination.pageNo, skillState.pagination.rowsPerPage);
    if (params.isNotEqualTo(skillState.previousSkillListParameters)) {
      const apiRepositorySkillList = new ApiRepositorySkillList();
      const skillList = await apiRepositorySkillList.getSkillsAsync(params);
      skillDispatch(new CommandSkillListSet(skillList.data, params, skillList.totalPages, skillList.totalRows));
      writeUrlHistory();
    }
  }, [skillDispatch, skillState.pagination, skillState.previousSkillListParameters, writeUrlHistory]);

  //
  // Event Handlers
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    // update context with new page number to force data reload
    skillDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <SkillTableHeader />
        <tbody>
          {skillState.skillList.map((row, index) => (
            <SkillRowWidget key={index} skill={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={skillState.pagination.pageNo} pageCount={skillState.tableStatsResults.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default SkillTableWidget;

import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { useSkillContext } from "../../../contexts/skillContext/SkillContext";
import ApiRepositorySkillList from "../../../apiRepository/skills/ApiRepositorySkillList";
import CommandPageNumberSet from "../../../contexts/skillContext/actions/CommandPageNumberSet";
import CommandSkillListSet from "../../../contexts/skillContext/actions/CommandSkillListSet";
import PaginationStateModel from "../../../contextsCommonModels/PaginationStateModel";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo, useState } from "react";
import SkillRowWidget from "./SkillRowWidget";
import SkillTableHeader from "./SkillTableHeader";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const SkillTableWidget: React.FC = () => {
  const { state: skillState, dispatch: skillDispatch } = useSkillContext();
  const [lastRequest, setLastRequest] = useState(new PaginationStateModel(EnumSortColumn.None));

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();
  useDataTableUrlReader();

  useMemo(async () => {
    // use repository to get data when state changes, then add it to the people list context
    if (lastRequest.isNotEqualTo(skillState.pagination)) {
      console.log("######################################## SKILL GET DATA #########################");
      const apiRepositorySkillList = new ApiRepositorySkillList();
      const skillList = await apiRepositorySkillList.getSkillsAsync(skillState.pagination.sortColumn, skillState.pagination.sortDirection, skillState.pagination.pageNumber, skillState.pagination.rowsPerPage);
      setLastRequest(skillState.pagination);
      skillDispatch(new CommandSkillListSet(skillList.data, skillList.rowsPerPage, skillList.totalPages, skillList.totalRows));
      writeUrlHistory();
    }
  }, [skillDispatch, skillState.pagination, writeUrlHistory, lastRequest]);

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
      <PaginationWidget page={skillState.pagination.pageNumber} pageCount={skillState.tableStatsResults.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default SkillTableWidget;

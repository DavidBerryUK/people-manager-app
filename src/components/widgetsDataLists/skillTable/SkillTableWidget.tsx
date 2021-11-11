import { EnumListType } from "../../../constants/EnumListType";
import { useSkillContext } from "../../../contexts/skillContext/SkillContext";
import ApiRepositorySkillList from "../../../apiRepository/skills/ApiRepositorySkillList";
import CommandPageNumberSet from "../../../contexts/skillContext/actions/CommandPageNumberSet";
import CommandSkillListSet from "../../../contexts/skillContext/actions/CommandSkillListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import SkillRowWidget from "./SkillRowWidget";
import SkillTableHeader from "./SkillTableHeader";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const SkillTableWidget: React.FC = () => {
  const { state: skillState, dispatch: skillDispatch } = useSkillContext();

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter(EnumListType.skills);
  useDataTableUrlReader(EnumListType.skills);

  useMemo(async () => {
    // use repository to get data when state changes, then add it to the people list context
    const apiRepositorySkillList = new ApiRepositorySkillList();
    const skillList = await apiRepositorySkillList.getSkillsAsync(skillState.pagination.sortColumn, skillState.pagination.sortDirection, skillState.pagination.pageNumber, skillState.pagination.rowsPerPage);
    skillDispatch(new CommandSkillListSet(skillList.data, skillList.rowsPerPage, skillList.totalPages, skillList.totalRows));
    writeUrlHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillDispatch, skillState.pagination]);

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

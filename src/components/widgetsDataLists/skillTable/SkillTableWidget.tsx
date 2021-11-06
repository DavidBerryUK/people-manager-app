import { UseSkillContext } from "../../../contexts/skillContext/SkillContext";
import ApiRepositorySkillList from "../../../apiRepository/skills/ApiRepositorySkillList";
import CommandPageNumberSet from "../../../contexts/skillContext/actions/CommandPageNumberSet";
import CommandSkillListSet from "../../../contexts/skillContext/actions/CommandSkillListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import SkillRowWidget from "./SkillRowWidget";
import SkillTableHeader from "./SkillTableHeader";

const SkillTableWidget: React.FC = () => {
  const { state: skillState, dispatch: skillDispatch } = UseSkillContext();

  //
  // Get the data from the repository
  //
  useMemo(async () => {
    const apiRepositorySkillList = new ApiRepositorySkillList();
    const skillList = await apiRepositorySkillList.getSkillsAsync(skillState.sortColumn, skillState.sortDirection, skillState.pageNumber, skillState.rowsPerPage);

    // update context with data
    //
    skillDispatch(new CommandSkillListSet(skillList.data, skillList.rowsPerPage, skillList.totalPages, skillList.totalRows));
  }, [skillDispatch, skillState.sortColumn, skillState.sortDirection, skillState.rowsPerPage, skillState.pageNumber]);

  //
  // Event Handlers
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    // update context with new page number
    //
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
      <PaginationWidget page={skillState.pageNumber} pageCount={skillState.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default SkillTableWidget;

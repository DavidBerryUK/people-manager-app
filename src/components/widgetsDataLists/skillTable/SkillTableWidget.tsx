import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import { UseSkillContext } from "../../../contexts/skillContext/SkillContext";
import ApiRepositorySkillList from "../../../apiRepository/skills/ApiRepositorySkillList";
import CommandPageNumberSet from "../../../contexts/skillContext/actions/CommandPageNumberSet";
import CommandSkillListSet from "../../../contexts/skillContext/actions/CommandSkillListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import SkillRowWidget from "./SkillRowWidget";
import SkillTableHeader from "./SkillTableHeader";
import UrlManagerService from "../../../services/urlManagers/UrlManagerService";
import { useHistory, useLocation } from "react-router";

const SkillTableWidget: React.FC = () => {
  const { state: skillState, dispatch: skillDispatch } = UseSkillContext();
  const { state: ListDetailState } = UseListDetailContext();
  const location = useLocation();
  const history = useHistory();
  //
  // Get the data from the repository
  //
  useMemo(async () => {
    console.log("****************** Skill Table [GET DATA] - get data ******************");
    const apiRepositorySkillList = new ApiRepositorySkillList();
    const skillList = await apiRepositorySkillList.getSkillsAsync(skillState.pagination.sortColumn, skillState.pagination.sortDirection, skillState.pagination.pageNumber, skillState.pagination.rowsPerPage);
    // update context with data
    //
    skillDispatch(new CommandSkillListSet(skillList.data, skillList.rowsPerPage, skillList.totalPages, skillList.totalRows));
  }, [skillDispatch, skillState.pagination]);

  useMemo(async () => {
    const params = UrlManagerService.createUrlParams(skillState.pagination, ListDetailState.detailView);
    if (location.search !== params) {
      history.push({ pathname: location.pathname, search: params });
    }
  }, [skillState.pagination, ListDetailState.detailView, location, history]);
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
      <PaginationWidget page={skillState.pagination.pageNumber} pageCount={skillState.pagination.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default SkillTableWidget;

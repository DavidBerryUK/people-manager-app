import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import { useTeamContext } from "../../../contexts/teamContext/TeamContext";
import ApiRepositoryTeamList from "../../../apiRepository/teams/ApiRepositoryTeamList";
import CommandPageNumberSet from "../../../contexts/teamContext/actions/CommandPageNumberSet";
import CommandTeamListSet from "../../../contexts/teamContext/actions/CommandTeamListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import TeamRowWidget from "./TeamRowWidget";
import TeamTableHeader from "./TeamTableHeader";
import UrlManagerService from "../../../services/urlManagers/UrlManagerService";
import { useHistory, useLocation } from "react-router";

const TeamTableWidget: React.FC = () => {
  const { state: teamState, dispatch: teamDispatch } = useTeamContext();
  const { state: ListDetailState } = UseListDetailContext();
  const location = useLocation();
  const history = useHistory();
  //
  // Get the data from the repository
  //
  useMemo(async () => {
    const apiRepositoryTeamList = new ApiRepositoryTeamList();
    const teamList = await apiRepositoryTeamList.getTeamsAsync(teamState.pagination.sortColumn, teamState.pagination.sortDirection, teamState.pagination.pageNumber, teamState.pagination.rowsPerPage);
    // update context with data
    //
    teamDispatch(new CommandTeamListSet(teamList.data, teamList.rowsPerPage, teamList.totalPages, teamList.totalRows));
  }, [teamDispatch, teamState.pagination]);

  useMemo(async () => {
    const params = UrlManagerService.createUrlParams(teamState.pagination, ListDetailState.detailView);
    if (location.search !== params) {
      history.push({ pathname: location.pathname, search: params });
    }
  }, [teamState.pagination, ListDetailState.detailView, location, history]);

  //
  // Event Handlers
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    // update context with new page number
    //
    teamDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <TeamTableHeader />
        <tbody>
          {teamState.teamList.map((row, index) => (
            <TeamRowWidget key={index} team={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={teamState.pagination.pageNumber} pageCount={teamState.tableStatsResults.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default TeamTableWidget;

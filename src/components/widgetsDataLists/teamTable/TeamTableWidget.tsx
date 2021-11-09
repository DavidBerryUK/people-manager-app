import { UseTeamContext } from "../../../contexts/teamContext/TeamContext";
import CommandPageNumberSet from "../../../contexts/teamContext/actions/CommandPageNumberSet";
import CommandTeamListSet from "../../../contexts/teamContext/actions/CommandTeamListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import TeamRowWidget from "./TeamRowWidget";
import TeamTableHeader from "./TeamTableHeader";
import ApiRepositoryTeamList from "../../../apiRepository/teams/ApiRepositoryTeamList";

const TeamTableWidget: React.FC = () => {
  const { state: teamState, dispatch: teamDispatch } = UseTeamContext();

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
      <PaginationWidget page={teamState.pagination.pageNumber} pageCount={teamState.pagination.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default TeamTableWidget;

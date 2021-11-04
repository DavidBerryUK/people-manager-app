import { UseTeamContext } from "../../../contexts/teamContext/TeamContext";
import CommandPageNumberSet from "../../../contexts/teamContext/actions/CommandPageNumberSet";
import CommandTeamListSet from "../../../contexts/teamContext/actions/CommandPeopleListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import TeamLineWidget from "./TeamLineWidget";
import TeamListHeader from "./TeamListHeader";
import ApiRepositoryTeamList from "../../../apiRepository/teams/ApiRepositoryTeamList";

const TeamListWidget: React.FC = () => {
  const { state: teamState, dispatch: teamDispatch } = UseTeamContext();

  //
  // Get the data from the repository
  //
  useMemo(async () => {
    const apiRepositoryTeamList = new ApiRepositoryTeamList();
    const teamList = await apiRepositoryTeamList.getTeamsAsync(teamState.sortColumn, teamState.sortDirection, teamState.pageNumber, teamState.rowsPerPage);

    // update context with data
    //
    teamDispatch(new CommandTeamListSet(teamList.data, teamList.rowsPerPage, teamList.totalPages, teamList.totalRows));
  }, [teamDispatch, teamState.sortColumn, teamState.sortDirection, teamState.rowsPerPage, teamState.pageNumber]);

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
        <TeamListHeader />
        <tbody>
          {teamState.teamList.map((row, index) => (
            <TeamLineWidget key={index} team={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={teamState.pageNumber} pageCount={teamState.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default TeamListWidget;

import { EnumListType } from "../../../constants/EnumListType";
import { useTeamContext } from "../../../contexts/teamContext/TeamContext";
import ApiRepositoryTeamList from "../../../apiRepository/teams/ApiRepositoryTeamList";
import CommandPageNumberSet from "../../../contexts/teamContext/actions/CommandPageNumberSet";
import CommandTeamListSet from "../../../contexts/teamContext/actions/CommandTeamListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import TeamRowWidget from "./TeamRowWidget";
import TeamTableHeader from "./TeamTableHeader";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const TeamTableWidget: React.FC = () => {
  const { state: teamState, dispatch: teamDispatch } = useTeamContext();

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter(EnumListType.teams);
  useDataTableUrlReader(EnumListType.teams);

  useMemo(async () => {
    // use repository to get data when state changes, then add it to the people list context
    const apiRepositoryTeamList = new ApiRepositoryTeamList();
    const teamList = await apiRepositoryTeamList.getTeamsAsync(teamState.pagination.sortColumn, teamState.pagination.sortDirection, teamState.pagination.pageNumber, teamState.pagination.rowsPerPage);
    teamDispatch(new CommandTeamListSet(teamList.data, teamList.rowsPerPage, teamList.totalPages, teamList.totalRows));
  }, [teamDispatch, teamState.pagination]);

  //
  // Event Handlers
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    // update context with new page number to force data reload
    teamDispatch(new CommandPageNumberSet(pageNo));
    writeUrlHistory();
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

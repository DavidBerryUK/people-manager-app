import { useTeamContext } from "../../../contexts/teamContext/TeamContext";
import ApiRepositoryTeamList from "../../../apiRepository/teams/ApiRepositoryTeamList";
import CommandPageNumberSet from "../../../contexts/teamContext/actions/CommandPageNumberSet";
import CommandTeamListSet from "../../../contexts/teamContext/actions/CommandTeamListSet";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import RepositoryTeamListParams from "../../../apiRepository/teams/models/RepositoryTeamListParams";
import TeamRowWidget from "./TeamRowWidget";
import TeamTableHeader from "./TeamTableHeader";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const TeamTableWidget: React.FC = () => {
  const { state: teamState, dispatch: teamDispatch } = useTeamContext();

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();
  useDataTableUrlReader();

  useMemo(async () => {
    var params = new RepositoryTeamListParams(teamState.pagination.sortColumn, teamState.pagination.sortDirection, teamState.pagination.pageNo, teamState.pagination.rowsPerPage);
    if (params.isNotEqualTo(teamState.previousTeamListParameters)) {
      const apiRepositoryTeamList = new ApiRepositoryTeamList();
      const teamList = await apiRepositoryTeamList.getTeamsAsync(params);
      teamDispatch(new CommandTeamListSet(teamList.data, params, teamList.totalPages, teamList.totalRows));
      writeUrlHistory();
    }
  }, [teamDispatch, teamState.pagination, teamState.previousTeamListParameters, writeUrlHistory]);

  const handleOnPageChangeEvent = (pageNo: number) => {
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
      <PaginationWidget page={teamState.pagination.pageNo} pageCount={teamState.tableStatsResults.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default TeamTableWidget;

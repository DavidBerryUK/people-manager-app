import { useMemo } from "react";
import { useTeamContext } from "../../contexts/teamContext/TeamContext";
import ApiRepositoryTeamList from "../../apiRepository/teams/ApiRepositoryTeamList";
import CommandTeamListSet from "../../contexts/teamContext/actions/CommandTeamListSet";
import RepositoryTeamListParams from "../../apiRepository/teams/models/RepositoryTeamListParams";
import useDataTableUrlWriter from "./UseDataTableUrlWriter";

//
// get team list data that represents the parameters
// held in the teamContext
//
function useTeamListRepository() {

    const { state: teamState, dispatch: teamDispatch } = useTeamContext();
    const { writeUrlHistory } = useDataTableUrlWriter();

    useMemo(async () => {
        var params = new RepositoryTeamListParams(teamState.pagination.sortColumn, teamState.pagination.sortDirection, teamState.pagination.pageNo, teamState.pagination.rowsPerPage);
        if (params.isNotEqualTo(teamState.previousTeamListParameters)) {
            const apiRepositoryTeamList = new ApiRepositoryTeamList();
            const teamList = await apiRepositoryTeamList.getTeamsAsync(params);
            teamDispatch(new CommandTeamListSet(teamList, params));
            writeUrlHistory();
        }
    }, [teamDispatch, teamState.pagination, teamState.previousTeamListParameters, writeUrlHistory]);

}

export default useTeamListRepository;
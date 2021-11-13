//
// Set Team List
import TeamApiModel from "../../../apiRepository/models/TeamApiModel";
import RepositoryTeamListParams from "../../../apiRepository/teams/models/RepositoryTeamListParams";
import { ITeamContextDispatchCommand } from "../interfaces/ITeamContextDispatchCommand";
import { TeamContextProps } from "../TeamContext";

//
export default class CommandTeamListSet implements ITeamContextDispatchCommand {
  teamList: Array<TeamApiModel>;
  teamListParameters: RepositoryTeamListParams;
  totalPages: number;
  totalRows: number;

  // Create the command with all data needed to update
  //  the state
  constructor(teamList: Array<TeamApiModel>, teamListParameters: RepositoryTeamListParams, totalPages: number, totalRows: number) {
    this.teamList = teamList;
    this.teamListParameters = teamListParameters;
    this.totalPages = totalPages;
    this.totalRows = totalRows;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: TeamContextProps): TeamContextProps {
    const newTableResults = state.tableStatsResults.clone();
    newTableResults.totalPages = this.totalPages;
    newTableResults.totalRows = this.totalRows;
    const newTeamListParameters = this.teamListParameters.clone();

    return {
      ...state,
      teamList: this.teamList,
      previousTeamListParameters: newTeamListParameters,
      tableStatsResults: newTableResults,
    };
  }
}

//
// Set Team List
import DataListApiModel from "../../../apiRepository/entities/DataListApiModel";
import TeamApiModel from "../../../apiRepository/entities/TeamApiModel";
import RepositoryTeamListParams from "../../../apiRepository/teams/models/RepositoryTeamListParams";
import { ITeamContextDispatchCommand } from "../interfaces/ITeamContextDispatchCommand";
import { TeamContextProps } from "../TeamContext";

//
export default class CommandTeamListSet implements ITeamContextDispatchCommand {
  teamList: DataListApiModel<TeamApiModel>;
  teamListParameters: RepositoryTeamListParams;

  // Create the command with all data needed to update
  //  the state
  constructor(teamList: DataListApiModel<TeamApiModel>, teamListParameters: RepositoryTeamListParams) {
    this.teamList = teamList;
    this.teamListParameters = teamListParameters;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: TeamContextProps): TeamContextProps {
    const newTeamListParameters = this.teamListParameters.clone();

    return {
      ...state,
      teamList: this.teamList,
      previousTeamListParameters: newTeamListParameters,
    };
  }
}

//
// Set Team List
import TeamApiModel from "../../../apiRepository/models/TeamApiModel";
import { ITeamContextDispatchCommand } from "../interfaces/ITeamContextDispatchCommand";
import { TeamContextProps } from "../TeamContext";

//
export default class CommandTeamListSet implements ITeamContextDispatchCommand {
  teamList: Array<TeamApiModel>;
  rowsPerPage: number;
  totalPages: number;
  totalRows: number;

  // Create the command with all data needed to update
  //  the state
  constructor(teamList: Array<TeamApiModel>, rowsPerPage: number, totalPages: number, totalRows: number) {
    this.teamList = teamList;
    this.rowsPerPage = rowsPerPage;
    this.totalPages = totalPages;
    this.totalRows = totalRows;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: TeamContextProps): TeamContextProps {
    const pagination = state.pagination.clone();
    pagination.rowsPerPage = this.rowsPerPage;
    pagination.totalPages = this.totalPages;
    pagination.totalRows = this.totalRows;

    return {
      ...state,
      teamList: this.teamList,
      pagination: pagination
    };
  }
}

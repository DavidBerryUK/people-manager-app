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

    // only update pagination if required or react will endup in an endless loop
    //
    let newPagination = state.pagination.clone();
    newPagination.rowsPerPage = this.rowsPerPage;

    if (newPagination.isEqualTo(state.pagination)) {
      // if pagination hasn't changed, then don't update it as it will
      // cause additional renders
      newPagination = state.pagination;
    }

    const newTableResults = state.tableStatsResults.clone();
    newTableResults.totalPages = this.totalPages;
    newTableResults.totalRows = this.totalRows;

    return {
      ...state,
      teamList: this.teamList,
      pagination: newPagination,
      tableStatsResults: newTableResults,
    };
  }
}

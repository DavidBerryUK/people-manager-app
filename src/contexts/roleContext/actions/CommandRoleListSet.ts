//
// Set Role List
import RoleApiModel from "../../../apiRepository/models/RoleApiModel";
import { IRoleContextDispatchCommand } from "../interfaces/IRoleContextDispatchCommand";
import { RoleContextProps } from "../RoleContext";

//
export default class CommandRoleListSet implements IRoleContextDispatchCommand {
  roleList: Array<RoleApiModel>;
  rowsPerPage: number;
  totalPages: number;
  totalRows: number;

  // Create the command with all data needed to update
  //  the state
  constructor(roleList: Array<RoleApiModel>, rowsPerPage: number, totalPages: number, totalRows: number) {
    this.roleList = roleList;
    this.rowsPerPage = rowsPerPage;
    this.totalPages = totalPages;
    this.totalRows = totalRows;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: RoleContextProps): RoleContextProps {
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
      roleList: this.roleList,
      pagination: newPagination,
      tableStatsResults: newTableResults,
    };
  }
}

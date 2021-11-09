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
    const newPagination = state.pagination.clone();
    newPagination.rowsPerPage = this.rowsPerPage;
    newPagination.totalPages = this.totalPages;
    newPagination.totalRows = this.totalRows;

    if (newPagination.isEqualTo(state.pagination)) {
      return {
        ...state,
        roleList: this.roleList
      };
    }

    return {
      ...state,
      roleList: this.roleList,
    };
  }
}

//
// Set Role List
import RoleApiModel from "../../../apiRepository/models/RoleApiModel";
import RepositoryRoleListParams from "../../../apiRepository/role/models/RepositoryRoleListParams";
import { IRoleContextDispatchCommand } from "../interfaces/IRoleContextDispatchCommand";
import { RoleContextProps } from "../RoleContext";

//
export default class CommandRoleListSet implements IRoleContextDispatchCommand {
  roleList: Array<RoleApiModel>;
  roleListParameters: RepositoryRoleListParams;
  totalPages: number;
  totalRows: number;

  // Create the command with all data needed to update
  //  the state
  constructor(roleList: Array<RoleApiModel>, roleListParameters: RepositoryRoleListParams, totalPages: number, totalRows: number) {
    this.roleList = roleList;
    this.roleListParameters = roleListParameters;
    this.totalPages = totalPages;
    this.totalRows = totalRows;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: RoleContextProps): RoleContextProps {
    const newTableResults = state.tableStatsResults.clone();
    newTableResults.totalPages = this.totalPages;
    newTableResults.totalRows = this.totalRows;
    const newRoleListParameters = this.roleListParameters.clone();

    return {
      ...state,
      roleList: this.roleList,
      previousRoleListParameters: newRoleListParameters,
      tableStatsResults: newTableResults,
    };
  }
}

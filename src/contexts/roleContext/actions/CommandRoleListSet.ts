import { IRoleContextDispatchCommand } from "../interfaces/IRoleContextDispatchCommand";
import { RoleContextProps } from "../RoleContext";
import DataListApiModel from "../../../apiRepository/models/DataListApiModel";
import RepositoryRoleListParams from "../../../apiRepository/role/models/RepositoryRoleListParams";
import RoleApiModel from "../../../apiRepository/models/RoleApiModel";

//
// Set Role List

//
export default class CommandRoleListSet implements IRoleContextDispatchCommand {
  roleList: DataListApiModel<RoleApiModel>;
  roleListParameters: RepositoryRoleListParams;

  // Create the command with all data needed to update
  //  the state
  constructor(roleList: DataListApiModel<RoleApiModel>, roleListParameters: RepositoryRoleListParams) {
    this.roleList = roleList;
    this.roleListParameters = roleListParameters;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: RoleContextProps): RoleContextProps {
    const newRoleListParameters = this.roleListParameters.clone();

    return {
      ...state,
      roleList: this.roleList,
      previousRoleListParameters: newRoleListParameters,
    };
  }
}

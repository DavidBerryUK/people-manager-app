// User has selected a different
import { IListDetailDispatchCommand } from "../interfaces/IListDetailContextDispatchCommand";
import { ListDetailContextProps } from "../ListDetailContext";

//
export default class CommandShowRole implements IListDetailDispatchCommand {
  roleId: number;

  // Create the command with all data needed to update
  //  the state
  constructor(roleId: number) {
    this.roleId = roleId;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ListDetailContextProps): ListDetailContextProps {
    return {
      ...state,
      personId: undefined,
      skillId: undefined,
      teamId: undefined,
      roleId: this.roleId,
    };
  }
}

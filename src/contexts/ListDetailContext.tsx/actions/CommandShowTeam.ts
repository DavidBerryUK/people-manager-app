// User has selected a different
import { IListDetailDispatchCommand } from "../interfaces/IListDetailContextDispatchCommand";
import { ListDetailContextProps } from "../ListDetailContext";

//
export default class CommandShowTeam implements IListDetailDispatchCommand {
  teamId: number;

  // Create the command with all data needed to update
  //  the state
  constructor(teamId: number) {
    this.teamId = teamId;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ListDetailContextProps): ListDetailContextProps {
    return {
      ...state,
      personId: undefined,
      skillId: undefined,
      teamId: this.teamId,
      roleId: undefined,
    };
  }
}

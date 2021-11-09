//
// Set Role List
import { IRoleContextDispatchCommand } from "../interfaces/IRoleContextDispatchCommand";
import { RoleContextProps } from "../RoleContext";

//
export default class CommandPageNumberSet implements IRoleContextDispatchCommand {
  pageNumber: number;

  // Create the command with all data needed to update
  //  the state
  constructor(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: RoleContextProps): RoleContextProps {
    const pagination = state.pagination.clone();
    pagination.pageNumber = this.pageNumber;

    return {
      ...state,
      pagination: pagination
    };
  }
}

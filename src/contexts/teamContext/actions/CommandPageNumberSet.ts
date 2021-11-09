//
// Set Team List
import { ITeamContextDispatchCommand } from "../interfaces/ITeamContextDispatchCommand";
import { TeamContextProps } from "../TeamContext";

//
export default class CommandPageNumberSet implements ITeamContextDispatchCommand {
  pageNumber: number;

  // Create the command with all data needed to update
  //  the state
  constructor(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: TeamContextProps): TeamContextProps {
    const pagination = state.pagination.clone();
    pagination.pageNumber = this.pageNumber;

    return {
      ...state,
      pagination: pagination
    };
  }
}

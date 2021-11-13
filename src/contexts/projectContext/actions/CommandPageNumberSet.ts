import { IProjectContextDispatchCommand } from "../interfaces/IProjectContextDispatchCommand";
import { ProjectContextProps } from "../ProjectContext";

//
// Set Project List

export default class CommandPageNumberSet implements IProjectContextDispatchCommand {
  pageNumber: number;

  // Create the command with all data needed to update
  //  the state
  constructor(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ProjectContextProps): ProjectContextProps {
    const pagination = state.pagination.clone();
    pagination.pageNo = this.pageNumber;

    return {
      ...state,
      pagination: pagination,
    };
  }
}

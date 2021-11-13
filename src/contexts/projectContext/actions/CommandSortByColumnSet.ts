import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { IProjectContextDispatchCommand } from "../interfaces/IProjectContextDispatchCommand";
import { ProjectContextProps } from "../ProjectContext";
//
// Set Project List

//
export default class CommandSortByColumnSet implements IProjectContextDispatchCommand {
  sortByColumn: EnumSortColumn;

  // Create the command with all data needed to update
  //  the state
  constructor(sortByColumn: EnumSortColumn) {
    this.sortByColumn = sortByColumn;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ProjectContextProps): ProjectContextProps {
    const pagination = state.pagination.clone();
    pagination.sortColumn = this.sortByColumn;

    return {
      ...state,
      pagination: pagination,
    };
  }
}

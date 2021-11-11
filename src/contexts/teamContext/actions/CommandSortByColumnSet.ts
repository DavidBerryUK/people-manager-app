//
// Set Team List
import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { ITeamContextDispatchCommand } from "../interfaces/ITeamContextDispatchCommand";
import { TeamContextProps } from "../TeamContext";

//
export default class CommandSortByColumnSet implements ITeamContextDispatchCommand {
  sortByColumn: EnumSortColumn;

  // Create the command with all data needed to update
  //  the state
  constructor(sortByColumn: EnumSortColumn) {
    this.sortByColumn = sortByColumn;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: TeamContextProps): TeamContextProps {
    const pagination = state.pagination.clone();
    pagination.sortColumn = this.sortByColumn;

    return {
      ...state,
      pagination: pagination
    };
  }
}

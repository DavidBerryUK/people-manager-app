//
// Set Role List
import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { IRoleContextDispatchCommand } from "../interfaces/IRoleContextDispatchCommand";
import { RoleContextProps } from "../RoleContext";

//
export default class CommandSortByColumnSet implements IRoleContextDispatchCommand {
  sortByColumn: EnumSortColumn;

  // Create the command with all data needed to update
  //  the state
  constructor(sortByColumn: EnumSortColumn) {
    this.sortByColumn = sortByColumn;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: RoleContextProps): RoleContextProps {
    const pagination = state.pagination.clone();
    pagination.sortColumn = this.sortByColumn;

    return {
      ...state,
      pagination: pagination
    };
  }
}

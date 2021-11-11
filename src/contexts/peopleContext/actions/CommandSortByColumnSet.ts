// Set Person List
import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { IPeopleContextDispatchCommand } from "../interfaces/IPeopleContextDispatchCommand";
import { PeopleContextProps } from "../PeopleContext";

//
export default class CommandSortByColumnSet implements IPeopleContextDispatchCommand {
  sortByColumn: EnumSortColumn;

  // Create the command with all data needed to update
  //  the state
  constructor(sortByColumn: EnumSortColumn) {
    this.sortByColumn = sortByColumn;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: PeopleContextProps): PeopleContextProps {
    const pagination = state.pagination.clone();
    pagination.sortColumn = this.sortByColumn;

    return {
      ...state,
      pagination: pagination
    };
  }
}

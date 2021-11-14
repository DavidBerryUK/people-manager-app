import { CustomerContextProps } from "../CustomerContext";
import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { ICustomerContextDispatchCommand } from "../interfaces/ICustomerContextDispatchCommand";

//
// Set Customer List

//
export default class CommandSortByColumnSet implements ICustomerContextDispatchCommand {
  sortByColumn: EnumSortColumn;

  // Create the command with all data needed to update
  //  the state
  constructor(sortByColumn: EnumSortColumn) {
    this.sortByColumn = sortByColumn;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: CustomerContextProps): CustomerContextProps {
    const pagination = state.pagination.clone();
    pagination.sortColumn = this.sortByColumn;

    return {
      ...state,
      pagination: pagination,
    };
  }
}

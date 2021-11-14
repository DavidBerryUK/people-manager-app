import { ICustomerContextDispatchCommand } from "../interfaces/ICustomerContextDispatchCommand";
import { CustomerContextProps } from "../CustomerContext";

//
// Set Customer List

export default class CommandPageNumberSet implements ICustomerContextDispatchCommand {
  pageNumber: number;

  // Create the command with all data needed to update
  //  the state
  constructor(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: CustomerContextProps): CustomerContextProps {
    const pagination = state.pagination.clone();
    pagination.pageNo = this.pageNumber;

    return {
      ...state,
      pagination: pagination,
    };
  }
}

//
// Set Person List
import { IPeopleContextDispatchCommand } from "../interfaces/IPeopleContextDispatchCommand";
import { PeopleContextProps } from "../PeopleContext";

//
export default class CommandPageNumberSet implements IPeopleContextDispatchCommand {
  pageNumber: number;

  // Create the command with all data needed to update
  //  the state
  constructor(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: PeopleContextProps): PeopleContextProps {

    console.log("CommandPageNumberSet:execute");

    const pagination = state.pagination.clone();
    pagination.pageNumber = this.pageNumber;

    return {
      ...state,
      pagination: pagination
    };
  }
}

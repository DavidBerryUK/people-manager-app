//
// Set Person List
import { IPeopleContextDispatchCommand } from "../interfaces/IPeopleContextDispatchCommand";
import { PeopleContextProps } from "../PeopleContext";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";

//
export default class CommandPeopleListSet implements IPeopleContextDispatchCommand {
  peopleList: Array<PersonApiModel>;

  // Create the command with all data needed to update
  //  the state
  constructor(peopleList: Array<PersonApiModel>) {
    this.peopleList = peopleList;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: PeopleContextProps): PeopleContextProps {
    return {
      ...state,
      peopleList: this.peopleList,
    };
  }
}

import { IPeopleContextDispatchCommand } from "../interfaces/IPeopleContextDispatchCommand";
import { PeopleContextProps } from "../PeopleContext";

//
export default class CommandPeopleListFilterNameSet implements IPeopleContextDispatchCommand {
  name: string;

  // Create the command with all data needed to update
  //  the state
  constructor(name: string) {
    this.name = name;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: PeopleContextProps): PeopleContextProps {
    const newPeopleListFilter = state.peopleListFilter.clone();
    newPeopleListFilter.name = this.name;
    return {
      ...state,
      peopleListFilter: newPeopleListFilter
    };
  }
}

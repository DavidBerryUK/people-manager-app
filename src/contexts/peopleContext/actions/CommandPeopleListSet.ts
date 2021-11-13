import { IPeopleContextDispatchCommand } from "../interfaces/IPeopleContextDispatchCommand";
import { PeopleContextProps } from "../PeopleContext";
import DataListApiModel from "../../../apiRepository/models/DataListApiModel";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";
import RepositoryPeopleListParams from "../../../apiRepository/people/models/RepositoryPeopleListParams";

//
export default class CommandPeopleListSet implements IPeopleContextDispatchCommand {
  peopleList: DataListApiModel<PersonApiModel>;
  peopleListParameters: RepositoryPeopleListParams;

  // Create the command with all data needed to update
  //  the state
  constructor(peopleList: DataListApiModel<PersonApiModel>, peopleListParameters: RepositoryPeopleListParams) {
    this.peopleList = peopleList;
    this.peopleListParameters = peopleListParameters;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: PeopleContextProps): PeopleContextProps {
    const newPeopleListParameters = this.peopleListParameters.clone();

    return {
      ...state,
      peopleList: this.peopleList,
      previousPeopleListParameters: newPeopleListParameters,
    };
  }
}

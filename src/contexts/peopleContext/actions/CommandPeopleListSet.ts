//
// Set Person List
import { IPeopleContextDispatchCommand } from "../interfaces/IPeopleContextDispatchCommand";
import { PeopleContextProps } from "../PeopleContext";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";
import RepositoryPeopleListParams from "../../../apiRepository/people/models/RepositoryPeopleListParams";

//
export default class CommandPeopleListSet implements IPeopleContextDispatchCommand {
  peopleList: Array<PersonApiModel>;
  peopleListParameters: RepositoryPeopleListParams;
  totalPages: number;
  totalRows: number;

  // Create the command with all data needed to update
  //  the state
  constructor(peopleList: Array<PersonApiModel>, peopleListParameters: RepositoryPeopleListParams, totalPages: number, totalRows: number) {
    this.peopleList = peopleList;
    this.peopleListParameters = peopleListParameters;
    this.totalPages = totalPages;
    this.totalRows = totalRows;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: PeopleContextProps): PeopleContextProps {
    const newTableResults = state.tableStatsResults.clone();
    newTableResults.totalPages = this.totalPages;
    newTableResults.totalRows = this.totalRows;

    const newPeopleListParameters = this.peopleListParameters.clone();

    return {
      ...state,
      peopleList: this.peopleList,
      previousPeopleListParameters: newPeopleListParameters,
      tableStatsResults: newTableResults,
    };
  }
}

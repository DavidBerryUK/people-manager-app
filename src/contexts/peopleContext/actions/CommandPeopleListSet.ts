//
// Set Person List
import { IPeopleContextDispatchCommand } from "../interfaces/IPeopleContextDispatchCommand";
import { PeopleContextProps } from "../PeopleContext";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";

//
export default class CommandPeopleListSet implements IPeopleContextDispatchCommand {
  peopleList: Array<PersonApiModel>;
  rowsPerPage: number;
  totalPages: number;
  totalRows: number;

  // Create the command with all data needed to update
  //  the state
  constructor(peopleList: Array<PersonApiModel>, rowsPerPage: number, totalPages: number, totalRows: number) {
    this.peopleList = peopleList;
    this.rowsPerPage = rowsPerPage;
    this.totalPages = totalPages;
    this.totalRows = totalRows;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: PeopleContextProps): PeopleContextProps {

    console.log("CommandPeopleListSet:execute");

    // only update pagination if required or react will endup in an endless loop
    //
    let newPagination = state.pagination.clone();
    newPagination.rowsPerPage = this.rowsPerPage;

    const newTableResults = state.tableStatsResults.clone();
    newTableResults.totalPages = this.totalPages;
    newTableResults.totalRows = this.totalRows;

    var response = {
      ...state,
      peopleList: this.peopleList,
      tableStatsResults: newTableResults,
    };

    if (!newPagination.isEqualTo(state.pagination)) {
      // if pagination hasn't changed, then don't update it as it will
      // cause additional renders
      console.log("Updating Pagination as it has been updated");
      response.pagination = newPagination;
    }

    return response;
  }
}

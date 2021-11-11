//
// Restore page settings with values from the url parameters 
//
import { IPeopleContextDispatchCommand } from "../interfaces/IPeopleContextDispatchCommand";
import { PeopleContextProps } from "../PeopleContext";
import PaginationStateModel from "../../../contextsCommonModels/PaginationStateModel";
import UrlParamStateModel from "../../../services/urlManagers/models/UrlParamStateModel";

//
export default class CommandRestorePeopleFromUrl implements IPeopleContextDispatchCommand {
  urlParamState: UrlParamStateModel;

  // Create the command with all data needed to update
  //  the state
  constructor(urlParamState: UrlParamStateModel) {
    this.urlParamState = urlParamState;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: PeopleContextProps): PeopleContextProps {
    const newPagination = new PaginationStateModel(this.urlParamState.sortColumn);
    newPagination.pageNumber = this.urlParamState.pageNumber;
    newPagination.rowsPerPage = this.urlParamState.rowsPerPage;
    newPagination.sortColumn = this.urlParamState.sortColumn;
    newPagination.sortDirection = this.urlParamState.sortDirection;

    console.log("RESTORE PERSON FROM HISTORY");
    console.log(`         parameter     :${this.urlParamState}`);

    if (newPagination.isEqualTo(state.pagination)) {
      // if pagination hasn't changed, then don't update it as it will
      // cause additional renders      
      console.log("Do not need to restore as pagination settings are the same");
      return state;
    }

    return {
      ...state,
      pagination: newPagination
    };
  }
}

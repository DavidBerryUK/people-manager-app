//
// Restore page settings with values from the url parameters 
//
import PaginationStateModel from "../../../contextsCommonModels/PaginationStateModel";
import UrlParamStateModel from "../../../services/urlManagers/models/UrlParamStateModel";
import { IPeopleContextDispatchCommand } from "../interfaces/IPeopleContextDispatchCommand";
import { PeopleContextProps } from "../PeopleContext";

//
export default class CommandRestoreFromUrl implements IPeopleContextDispatchCommand {



  urlParamState: UrlParamStateModel;


  // Create the command with all data needed to update
  //  the state
  constructor(urlParamState: UrlParamStateModel) {
    this.urlParamState = urlParamState;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: PeopleContextProps): PeopleContextProps {

    console.log("CommandRestoreFromUrl:execute");

    //  return { ...state };
    const newPagination = new PaginationStateModel(this.urlParamState.sortColumn);
    newPagination.pageNumber = this.urlParamState.pageNumber;
    newPagination.rowsPerPage = this.urlParamState.rowsPerPage;
    newPagination.sortDirection = this.urlParamState.sortDirection;

    if (newPagination.isEqualTo(state.pagination)) {
      // if pagination hasn't changed, then don't update it as it will
      // cause additional renders      
      return state;
    }

    return {
      ...state,
      pagination: newPagination
    };
  }
}

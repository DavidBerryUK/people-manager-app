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

    //  return { ...state };
    const pagination = new PaginationStateModel(this.urlParamState.sortColumn);
    pagination.pageNumber = this.urlParamState.pageNumber;
    pagination.totalPages = this.urlParamState.totalPages;
    pagination.totalRows = this.urlParamState.totalRows;
    pagination.rowsPerPage = this.urlParamState.rowsPerPage;
    pagination.sortDirection = this.urlParamState.sortDirection;

    return {
      ...state,
      pagination: pagination
    };
  }
}

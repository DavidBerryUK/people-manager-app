import PaginationApiModel from "../../../apiRepository/models/PaginationApiModel";
import UrlParamStateModel from "../../../services/urlManagers/models/UrlParamStateModel";
import { ICustomerContextDispatchCommand } from "../interfaces/ICustomerContextDispatchCommand";
import { CustomerContextProps } from "../CustomerContext";

//
// Restore page settings with values from the url parameters
//

export default class CommandRestoreCustomerFromUrl implements ICustomerContextDispatchCommand {
  urlParamState: UrlParamStateModel;

  // Create the command with all data needed to update
  //  the state
  constructor(urlParamState: UrlParamStateModel) {
    this.urlParamState = urlParamState;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: CustomerContextProps): CustomerContextProps {
    const newPagination = new PaginationApiModel(this.urlParamState.sortColumn);
    newPagination.pageNo = this.urlParamState.pageNumber;
    newPagination.rowsPerPage = this.urlParamState.rowsPerPage;
    newPagination.sortDirection = this.urlParamState.sortDirection;

    if (newPagination.isEqualTo(state.pagination)) {
      // if pagination hasn't changed, then don't update it as it will
      // cause additional renders
      return state;
    }

    return {
      ...state,
      pagination: newPagination,
    };
  }
}

//
// Restore page settings with values from the url parameters
//
import { ITeamContextDispatchCommand } from "../interfaces/ITeamContextDispatchCommand";
import { TeamContextProps } from "../TeamContext";
import PaginationModel from "../../../apiRepository/models/PaginationModel";
import UrlParamStateModel from "../../../services/urlManagers/models/UrlParamStateModel";

export default class CommandRestoreTeamFromUrl implements ITeamContextDispatchCommand {
  urlParamState: UrlParamStateModel;

  // Create the command with all data needed to update
  //  the state
  constructor(urlParamState: UrlParamStateModel) {
    this.urlParamState = urlParamState;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: TeamContextProps): TeamContextProps {
    const newPagination = new PaginationModel(this.urlParamState.sortColumn);
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

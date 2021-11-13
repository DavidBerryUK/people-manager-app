//
// Restore page settings with values from the url parameters
//
import { ISkillContextDispatchCommand } from "../interfaces/ISkillContextDispatchCommand";
import { SkillContextProps } from "../SkillContext";
import PaginationApiModel from "../../../apiRepository/models/PaginationApiModel";
import UrlParamStateModel from "../../../services/urlManagers/models/UrlParamStateModel";

export default class CommandRestoreSkillsFromUrl implements ISkillContextDispatchCommand {
  urlParamState: UrlParamStateModel;

  // Create the command with all data needed to update
  //  the state
  constructor(urlParamState: UrlParamStateModel) {
    this.urlParamState = urlParamState;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: SkillContextProps): SkillContextProps {
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

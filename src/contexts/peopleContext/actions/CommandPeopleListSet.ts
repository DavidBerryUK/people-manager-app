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

    const pagination = state.pagination.clone();
    pagination.rowsPerPage = this.rowsPerPage;
    pagination.totalPages = this.totalPages;
    pagination.totalRows = this.totalRows;

    return {
      ...state,
      peopleList: this.peopleList,
      pagination: pagination
    };
  }
}

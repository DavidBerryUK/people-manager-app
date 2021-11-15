import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../../../constants/enums/EnumSortDirection";
import PaginationModel from "../../models/PaginationModel";

//
// add parameters required to get a list of people from the repository
//
// this will include page no, page size, any filters etc
//
export default class RepositoryPeopleListParams extends PaginationModel {
  constructor(sortColumn: EnumSortColumn, sortDirection: EnumSortDirection, pageNo: number, rowsPerPage: number) {
    super();
    this.sortColumn = sortColumn;
    this.sortDirection = sortDirection;
    this.pageNo = pageNo;
    this.rowsPerPage = rowsPerPage;
  }

  static get zero(): RepositoryPeopleListParams {
    return new RepositoryPeopleListParams(EnumSortColumn.None, EnumSortDirection.asc, 0, 0);
  }

  static get default(): RepositoryPeopleListParams {
    return new RepositoryPeopleListParams(EnumSortColumn.Forename, EnumSortDirection.asc, 1, 10);
  }

  // determine if all values are equal
  //
  isEqualTo(model: RepositoryPeopleListParams): boolean {
    // compare basic pagination
    if (super.isEqualTo(model)) {
      return true;
    }
    return false;
  }

  isNotEqualTo(model: RepositoryPeopleListParams): boolean {
    return !this.isEqualTo(model);
  }
}

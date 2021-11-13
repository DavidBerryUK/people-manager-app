import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../../../constants/enums/EnumSortDirection";
import PaginationApiModel from "../../models/PaginationApiModel";

//
// add parameters required to get a list of teams from the repository
//
// this will include page no, page size, any filters etc
//
export default class RepositoryTeamListParams extends PaginationApiModel {
  constructor(sortColumn: EnumSortColumn, sortDirection: EnumSortDirection, pageNo: number, rowsPerPage: number) {
    super();
    this.sortColumn = sortColumn;
    this.sortDirection = sortDirection;
    this.pageNo = pageNo;
    this.rowsPerPage = rowsPerPage;
  }

  static get zero(): RepositoryTeamListParams {
    return new RepositoryTeamListParams(EnumSortColumn.None, EnumSortDirection.asc, 0, 0);
  }

  static get default(): RepositoryTeamListParams {
    return new RepositoryTeamListParams(EnumSortColumn.Forename, EnumSortDirection.asc, 1, 10);
  }

  // determine if all values are equal
  //
  isEqualTo(model: RepositoryTeamListParams): boolean {
    // compare basic pagination
    if (super.isEqualTo(model)) {
      return true;
    }
    return false;
  }

  isNotEqualTo(model: RepositoryTeamListParams): boolean {
    return !this.isEqualTo(model);
  }
}

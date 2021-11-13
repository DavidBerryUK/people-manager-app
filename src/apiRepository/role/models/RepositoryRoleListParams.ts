import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../../../constants/enums/EnumSortDirection";
import PaginationApiModel from "../../models/PaginationApiModel";

//
// add parameters required to get a list of people from the repository
//
// this will include page no, page size, any filters etc
//
export default class RepositoryRoleListParams extends PaginationApiModel {
  constructor(sortColumn: EnumSortColumn, sortDirection: EnumSortDirection, pageNo: number, rowsPerPage: number) {
    super();
    this.sortColumn = sortColumn;
    this.sortDirection = sortDirection;
    this.pageNo = pageNo;
    this.rowsPerPage = rowsPerPage;
  }

  static get zero(): RepositoryRoleListParams {
    return new RepositoryRoleListParams(EnumSortColumn.None, EnumSortDirection.asc, 0, 0);
  }

  static get default(): RepositoryRoleListParams {
    return new RepositoryRoleListParams(EnumSortColumn.Forename, EnumSortDirection.asc, 1, 10);
  }

  // determine if all values are equal
  //
  isEqualTo(model: RepositoryRoleListParams): boolean {
    // compare basic pagination
    if (super.isEqualTo(model)) {
      return true;
    }
    return false;
  }

  isNotEqualTo(model: RepositoryRoleListParams): boolean {
    return !this.isEqualTo(model);
  }
}

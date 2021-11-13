import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../../../constants/enums/EnumSortDirection";
import PaginationApiModel from "../../models/PaginationApiModel";

//
// add parameters required to get a list of skills from the repository
//
// this will include page no, page size, any filters etc
//
export default class RepositorySkillListParams extends PaginationApiModel {
  constructor(sortColumn: EnumSortColumn, sortDirection: EnumSortDirection, pageNo: number, rowsPerPage: number) {
    super();
    this.sortColumn = sortColumn;
    this.sortDirection = sortDirection;
    this.pageNo = pageNo;
    this.rowsPerPage = rowsPerPage;
  }

  static get zero(): RepositorySkillListParams {
    return new RepositorySkillListParams(EnumSortColumn.None, EnumSortDirection.asc, 0, 0);
  }

  static get default(): RepositorySkillListParams {
    return new RepositorySkillListParams(EnumSortColumn.Forename, EnumSortDirection.asc, 1, 10);
  }

  // determine if all values are equal
  //
  isEqualTo(model: RepositorySkillListParams): boolean {
    // compare basic pagination
    if (super.isEqualTo(model)) {
      return true;
    }
    return false;
  }

  isNotEqualTo(model: RepositorySkillListParams): boolean {
    return !this.isEqualTo(model);
  }
}

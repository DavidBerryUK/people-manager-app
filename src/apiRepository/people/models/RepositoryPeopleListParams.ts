import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../../../constants/enums/EnumSortDirection";
import PaginationModel from "../../models/PaginationModel";
import RepositoryPeopleListFilters from "./RepositoryPeopleListFilters";

//
// add parameters required to get a list of people from the repository
//
// this will include page no, page size, any filters etc
//
export default class RepositoryPeopleListParams extends PaginationModel {

  filter: RepositoryPeopleListFilters;

  constructor(
    sortColumn: EnumSortColumn,
    sortDirection: EnumSortDirection,
    pageNo: number,
    rowsPerPage: number,
    filter: RepositoryPeopleListFilters) {
    super();
    this.sortColumn = sortColumn;
    this.sortDirection = sortDirection;
    this.pageNo = pageNo;
    this.rowsPerPage = rowsPerPage;
    this.filter = filter;
  }

  static get zero(): RepositoryPeopleListParams {
    return new RepositoryPeopleListParams(EnumSortColumn.None, EnumSortDirection.asc, 0, 0, new RepositoryPeopleListFilters());
  }

  static get default(): RepositoryPeopleListParams {
    return new RepositoryPeopleListParams(EnumSortColumn.Forename, EnumSortDirection.asc, 1, 10, new RepositoryPeopleListFilters());
  }



  // determine if all values are equal
  //
  isEqualTo(model: RepositoryPeopleListParams): boolean {
    // compare basic pagination
    if (super.isEqualTo(model) && this.filter.isEqualTo(model.filter)) {
      return true;
    }
    return false;
  }

  isNotEqualTo(model: RepositoryPeopleListParams): boolean {
    return !this.isEqualTo(model);
  }

  // clone object, required as when updating context,
  //  a new model is needed.
  clone(): RepositoryPeopleListParams {
    const model = new RepositoryPeopleListParams(this.sortColumn, this.sortDirection, this.pageNo, this.rowsPerPage, this.filter);
    model.filter = this.filter.clone();
    return model;
  }
}

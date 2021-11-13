import { EnumSortColumn } from "../../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../../constants/enums/EnumSortDirection";
//
// Common pagination model for all list views,
// includes logic for changing sort columns and toggling direction
//
export default class PaginationApiModel {
  private _sortColumn: EnumSortColumn;
  pageNo: number;
  rowsPerPage: number;
  sortDirection: EnumSortDirection;

  constructor(defaultSortColumn: EnumSortColumn = EnumSortColumn.None) {
    this.pageNo = 1;
    this.rowsPerPage = 10;
    this._sortColumn = defaultSortColumn;
    this.sortDirection = EnumSortDirection.asc;
  }

  // clone object, required as when updating context,
  //  a new model is needed.
  clone(): PaginationApiModel {
    const model = new PaginationApiModel(this._sortColumn);
    model.pageNo = this.pageNo;
    model.rowsPerPage = this.rowsPerPage;
    model.sortDirection = this.sortDirection;
    return model;
  }

  // determine if all values are equal
  //
  isEqualTo(model: PaginationApiModel): boolean {
    if (this._sortColumn !== model._sortColumn || this.pageNo !== model.pageNo || this.rowsPerPage !== model.rowsPerPage || this.sortDirection !== model.sortDirection) {
      return false;
    }
    return true;
  }

  isNotEqualTo(model: PaginationApiModel): boolean {
    return !this.isEqualTo(model);
  }

  // change sort column,
  //  no column change then toggle direction
  set sortColumn(sortColumn: EnumSortColumn) {
    if (this._sortColumn === sortColumn) {
      if (this.sortDirection === EnumSortDirection.asc) {
        this.sortDirection = EnumSortDirection.desc;
      } else {
        this.sortDirection = EnumSortDirection.asc;
      }
      return;
    }
    this._sortColumn = sortColumn;
    this.sortDirection = EnumSortDirection.asc;
  }

  get sortColumn(): EnumSortColumn {
    return this._sortColumn;
  }
}

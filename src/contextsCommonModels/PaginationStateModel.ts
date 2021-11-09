import { EnumSortColumn } from "../constants/EnumSortColumn";
import { EnumSortDirection } from "../constants/EnumSortDirectory";

//
// Common pagination model for all list views,
// includes logic for changing sort columns and toggling direction
//
export default class PaginationStateModel {

    private _sortColumn: EnumSortColumn;
    pageNumber: number;
    totalPages: number;
    totalRows: number;
    rowsPerPage: number;
    sortDirection: EnumSortDirection;

    constructor(defaultSortColumn: EnumSortColumn) {
        this.pageNumber = 1;
        this.totalPages = 0;
        this.totalRows = 0;
        this.rowsPerPage = 10;
        this._sortColumn = defaultSortColumn;
        this.sortDirection = EnumSortDirection.asc;
    }

    // clone object, required as when updating context, 
    //  a new model is needed.
    clone(): PaginationStateModel {
        const model = new PaginationStateModel(this._sortColumn);
        model.pageNumber = this.pageNumber;
        model.totalPages = this.totalPages;
        model.totalRows = this.totalRows;
        model.rowsPerPage = this.rowsPerPage;
        model.sortDirection = this.sortDirection;
        return model;
    }

    // determine if all values are equal
    //
    isEqualTo(model: PaginationStateModel): boolean {
        if (this._sortColumn !== model._sortColumn ||
            this.pageNumber !== model.pageNumber ||
            this.totalPages !== model.totalPages ||
            this.totalRows !== model.totalRows ||
            this.rowsPerPage !== model.rowsPerPage ||
            this.sortDirection !== model.sortDirection) {
            return false
        }
        return true;
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
            return
        }
        this._sortColumn = sortColumn;
        this.sortDirection = EnumSortDirection.asc;
    }

    get sortColumn(): EnumSortColumn {
        return this._sortColumn;
    }
}
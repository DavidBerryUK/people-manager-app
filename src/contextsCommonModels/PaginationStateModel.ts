import { EnumSortColumn } from "../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../constants/enums/EnumSortDirectory";
//
// Common pagination model for all list views,
// includes logic for changing sort columns and toggling direction
//
export default class PaginationStateModel {

    private _sortColumn: EnumSortColumn;
    pageNumber: number;

    rowsPerPage: number;
    sortDirection: EnumSortDirection;

    constructor(defaultSortColumn: EnumSortColumn) {
        this.pageNumber = 1;
        this.rowsPerPage = 10;
        this._sortColumn = defaultSortColumn;
        this.sortDirection = EnumSortDirection.asc;
    }

    // clone object, required as when updating context, 
    //  a new model is needed.
    clone(): PaginationStateModel {
        const model = new PaginationStateModel(this._sortColumn);
        model.pageNumber = this.pageNumber;
        model.rowsPerPage = this.rowsPerPage;
        model.sortDirection = this.sortDirection;
        return model;
    }

    // determine if all values are equal
    //
    isEqualTo(model: PaginationStateModel): boolean {
        if (this._sortColumn !== model._sortColumn ||
            this.pageNumber !== model.pageNumber ||
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
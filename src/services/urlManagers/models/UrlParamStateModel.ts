// Represents values of params in URL,
//  used when user enters their own url, or
import { EnumDetailViewType } from "../../../constants/EnumDetailViewType";
import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { EnumSortDirection } from "../../../constants/EnumSortDirectory";

//  if the forward / back buttons are used
export default class UrlParamStateModel {
    //
    // Pagination
    //
    sortColumn: EnumSortColumn;
    pageNumber: number;
    totalPages: number;
    totalRows: number;
    rowsPerPage: number;
    sortDirection: EnumSortDirection;

    //
    // Detail View
    //
    detailViewType: EnumDetailViewType;
    detailKey: number;

    constructor(
        sortColumn: EnumSortColumn,
        pageNumber: number,
        totalPages: number,
        totalRows: number,
        rowsPerPage: number,
        sortDirection: EnumSortDirection,
        detailViewType: EnumDetailViewType,
        detailKey: number
    ) {
        this.sortColumn = sortColumn;
        this.pageNumber = pageNumber;
        this.totalPages = totalPages;
        this.totalRows = totalRows;
        this.rowsPerPage = rowsPerPage;
        this.sortDirection = sortDirection;
        this.detailViewType = detailViewType;
        this.detailKey = detailKey;
    }
}
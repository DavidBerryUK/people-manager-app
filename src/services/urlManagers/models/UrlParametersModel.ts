//
// encapsulate logic that converts a dictionary containing
// parameters from a url into strongly typed 
// properties for use by the application

import { EnumDetailViewType } from "../../../constants/EnumDetailViewType";
import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { EnumSortDirection } from "../../../constants/EnumSortDirectory";
import UrlParameterNames from "../constants/UrlParamterNames";

//
export default class UrlModel {

    private dictionary: { [name: string]: string } = {};

    get pageNumber(): number {
        return this.getNumberForKey(UrlParameterNames.pageNumber, 1);
    }

    get rowsPerPage(): number {
        return this.getNumberForKey(UrlParameterNames.rowsPerPage, 10);
    }

    get sortColumn(): EnumSortColumn {
        var value = this.dictionary[UrlParameterNames.sortColumn];
        if (value === undefined) {
            return EnumSortColumn.None;
        }
        var index = value as keyof typeof EnumSortColumn;
        return EnumSortColumn[index];
    }

    get sortDirection(): EnumSortDirection {
        var value = this.dictionary[UrlParameterNames.sortDirection];
        if (value === undefined) {
            return EnumSortDirection.asc;
        }
        return value as EnumSortDirection;
    }

    get detailViewType(): EnumDetailViewType {
        var value = this.dictionary[UrlParameterNames.detailViewType];
        if (value === undefined) {
            return EnumDetailViewType.none;
        }
        return value as EnumDetailViewType;
    }

    get detailKey(): number {
        return 0;
    }

    constructor(dictionary: { [name: string]: string } = {}) {
        this.dictionary = dictionary;
    }

    private getNumberForKey(key: string, defaultValue: number): number {
        var value = this.dictionary[key];
        if (value === undefined) {
            return defaultValue;
        }
        return Number(value);
    }


}
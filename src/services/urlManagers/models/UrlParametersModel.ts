import { EnumDetailViewType } from "../../../constants/enums/EnumDetailViewType";
import { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import { EnumSortDirection } from "../../../constants/enums/EnumSortDirectory";
import UrlParameterNames from "../constants/UrlParamterNames";

//
// strongly typed model that represents values in a 
// url parameter string. the values are provided to this model
// as a dictionary in the constructor
//
export default class UrlModel {

    private dictionary: { [name: string]: string } = {};

    readonly pageNumber: number
    readonly rowsPerPage: number
    readonly sortColumn: EnumSortColumn;
    readonly sortDirection: EnumSortDirection;
    readonly detailViewType: EnumDetailViewType;
    readonly detailKey: number;

    //
    // Constructor
    //
    constructor(dictionary: { [name: string]: string } = {}) {
        this.dictionary = dictionary;
        this.pageNumber = this.getNumberForKey(UrlParameterNames.pageNumber, 1);
        this.rowsPerPage = this.getNumberForKey(UrlParameterNames.rowsPerPage, 10);
        this.detailKey = this.getNumberForKey(UrlParameterNames.detailViewKey, 0);
        this.sortColumn = this.evaluateSortColumn();
        this.sortDirection = this.evaluateSortDirection();
        this.detailViewType = this.evaluateDetailType();

        console.log("###############################################################");
        console.log(this.sortColumn);

        if (this.sortColumn === EnumSortColumn.Forename) {
            console.log("   ****** sort = forename");
        } else if (this.sortColumn === EnumSortColumn.Surname) {
            console.log("   ****** sort = Surname");
        } else if (this.sortColumn === EnumSortColumn.Role) {
            console.log("   ****** sort = Role");
        } else if (this.sortColumn === EnumSortColumn.Email) {
            console.log("   ****** sort = Email");
        } else {
            // console.log(EnumSortColumn.Forename);
            // console.log(EnumSortColumn["Forename"]);
            // console.log(EnumSortColumn.Surname);
            // console.log(EnumSortColumn["Surname"]);
            // console.log(EnumSortColumn.Role);
            // console.log(EnumSortColumn["Role"]);
            // console.log(EnumSortColumn.Email);
            // console.log(EnumSortColumn["Email"]);

            var s1 = "Role";
            var s1b = s1 as keyof typeof EnumSortColumn;
            var r1 = EnumSortColumn.Role;
            var r2 = EnumSortColumn[s1b];
            if (r1 === r2) {
                console.log("MATCH");
            } else {
                console.log("BOOOOO");
            }

            console.log("________________column does not match anything_______________")
            console.log(this.sortColumn);
        }
    }

    private evaluateSortColumn(): EnumSortColumn {
        var value = this.dictionary[UrlParameterNames.sortColumn];
        var valueTyped = value as keyof typeof EnumSortColumn;
        var response = EnumSortColumn[valueTyped]
        console.log(response);
        return response;

    }

    private getNumberForKey(key: string, defaultValue: number): number {
        var value = this.dictionary[key];
        if (value === undefined) {
            return defaultValue;
        }
        return Number(value);
    }



    private evaluateSortDirection(): EnumSortDirection {
        var value = this.dictionary[UrlParameterNames.sortDirection];

        if (value === undefined) {
            return EnumSortDirection.asc;
        }
        return value as EnumSortDirection;
    }

    private evaluateDetailType(): EnumDetailViewType {
        var value = this.dictionary[UrlParameterNames.detailViewType];
        if (value === undefined) {
            return EnumDetailViewType.none;
        }
        return value as EnumDetailViewType;
    }


}
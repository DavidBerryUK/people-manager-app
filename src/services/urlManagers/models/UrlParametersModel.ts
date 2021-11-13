import EnumDetailViewTypeConvert, { EnumDetailViewType } from "../../../constants/enums/EnumDetailViewType";
import EnumSortColumnConvert, { EnumSortColumn } from "../../../constants/enums/EnumSortColumn";
import EnumSortDirectionConvert, { EnumSortDirection } from "../../../constants/enums/EnumSortDirection";
import UrlParameterNames from "../constants/UrlParameterNames";

//
// strongly typed model that represents values in a
// url parameter string. the values are provided to this model
// as a dictionary in the constructor
//
export default class UrlModel {
  private dictionary: { [name: string]: string } = {};

  readonly pageNumber: number;
  readonly rowsPerPage: number;
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
  }

  private getNumberForKey(key: string, defaultValue: number): number {
    var value = this.dictionary[key];
    if (value === undefined) {
      return defaultValue;
    }
    return Number(value);
  }

  private evaluateSortDirection(): EnumSortDirection {
    var textValue = this.dictionary[UrlParameterNames.sortDirection];
    var enumValue = EnumSortDirectionConvert.toEnum(textValue);
    return enumValue;
  }

  private evaluateSortColumn(): EnumSortColumn {
    var textValue = this.dictionary[UrlParameterNames.sortColumn];
    var enumValue = EnumSortColumnConvert.toEnum(textValue);
    return enumValue;
  }

  private evaluateDetailType(): EnumDetailViewType {
    var textValue = this.dictionary[UrlParameterNames.detailViewType];
    var enumValue = EnumDetailViewTypeConvert.toEnum(textValue);
    return enumValue;
  }
}

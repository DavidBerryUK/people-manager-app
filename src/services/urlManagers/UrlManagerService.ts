import EnumSortColumnConvert from "../../constants/enums/EnumSortColumn";
import EnumSortDirectionConvert from "../../constants/enums/EnumSortDirection";
import DetailViewStateModel from "../../contexts/ListDetailContext.tsx/models/DetailViewStateModel";
import PaginationApiModel from "../../apiRepository/models/PaginationApiModel";
import UrlParameterNames from "./constants/UrlParamterNames";
import UrlParametersModel from "./models/UrlParametersModel";
import UrlParamStateModel from "./models/UrlParamStateModel";
import UrlUtilities from "./UrlUtilities";

export default class UrlManagerService {
  //
  // create url parameters string from object states and return..
  //
  static createUrlParams(pagination: PaginationApiModel | null, detail: DetailViewStateModel | null): string {
    var params = "";

    if (pagination) {
      params =
        `${params}` +
        `?${UrlParameterNames.pageNumber}=${pagination.pageNo}` +
        `&${UrlParameterNames.rowsPerPage}=${pagination.rowsPerPage}` +
        `&${UrlParameterNames.sortColumn}=${EnumSortColumnConvert.toString(pagination.sortColumn)}` +
        `&${UrlParameterNames.sortDirection}=${EnumSortDirectionConvert.toString(pagination.sortDirection)}`;
    }

    if (detail) {
      if (detail.viewType) {
        params = `${params}&${UrlParameterNames.detailViewType}=${detail.viewType}`;
      }
      if (detail.detailKey) {
        params = `${params}&${UrlParameterNames.detailViewKey}=${detail.detailKey}`;
      }
    }
    return params;
  }

  //
  // convert a url parameter string to a strongly typed data object
  //
  static getStateFromParam(params: string): UrlParamStateModel {
    // get strongly typed version of the url parameters
    //
    var dictionary = UrlUtilities.convertParamsToDictionary(params);
    var urlParameters = new UrlParametersModel(dictionary);
    //
    // Pagination
    //
    const pageNumber = urlParameters.pageNumber;
    const rowsPerPage = urlParameters.rowsPerPage;
    const sortColumn = urlParameters.sortColumn;
    const sortDirection = urlParameters.sortDirection;
    //
    // Detail View
    //
    const detailViewType = urlParameters.detailViewType;
    const detailKey = urlParameters.detailKey;

    var state = new UrlParamStateModel(sortColumn, pageNumber, 0, 0, rowsPerPage, sortDirection, detailViewType, detailKey);

    return state;
  }
}

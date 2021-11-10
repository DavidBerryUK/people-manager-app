import DetailViewStateModel from "../../contexts/ListDetailContext.tsx/models/DetailViewStateModel";
import PaginationStateModel from "../../contextsCommonModels/PaginationStateModel";
import UrlUtilities from "./UrlUtilities";
import UrlParamStateModel from "./models/UrlParamStateModel";
import UrlParametersModel from "./models/UrlParametersModel";
import UrlParameterNames from "./constants/UrlParamterNames";

export default class UrlManagerService {

    //
    // create url parameters string from object states and return..
    //
    static createUrlParams(pagination: PaginationStateModel | null, detail: DetailViewStateModel | null): string {

        var params = '';

        if (pagination) {
            params = `${params}` +
                `?${UrlParameterNames.pageNumber}=${pagination.pageNumber}` +
                `&${UrlParameterNames.rowsPerPage}=${pagination.rowsPerPage}` +
                `&${UrlParameterNames.sortColumn}=${pagination.sortColumn}` +
                `&${UrlParameterNames.sortDirection}=${pagination.sortDirection}`;
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

        var state = new UrlParamStateModel(
            sortColumn,
            pageNumber,
            0,
            0,
            rowsPerPage,
            sortDirection,
            detailViewType,
            detailKey)

        return state;
    }
}
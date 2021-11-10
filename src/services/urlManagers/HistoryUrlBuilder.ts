import DetailViewStateModel from "../../contexts/ListDetailContext.tsx/models/DetailViewStateModel";
import PaginationStateModel from "../../contextsCommonModels/PaginationStateModel";
import UrlManagerService from "./UrlManagerService";

type result = { pathname: string, search: string }

//
// Build URL
//
export default class HistoryUrlBuilder {

    static buildUrl(path: string, pagination: PaginationStateModel, detail: DetailViewStateModel): result {
        var params = UrlManagerService.createUrlParams(pagination, detail);
        var result = { pathname: path, search: params };
        return result;
    }

    static buildNewPageNoUrl(path: string, pagination: PaginationStateModel, detail: DetailViewStateModel, pageNumber: number): result {
        var newPagination = pagination.clone();
        newPagination.pageNumber = pageNumber;
        var params = UrlManagerService.createUrlParams(newPagination, detail);
        var result = { pathname: path, search: params };
        return result;
    }
}
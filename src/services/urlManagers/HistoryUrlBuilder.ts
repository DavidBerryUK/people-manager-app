import DetailViewStateModel from "../../contexts/ListDetailContext.tsx/models/DetailViewStateModel";
import PaginationModel from "../../apiRepository/models/PaginationModel";
import UrlManagerService from "./UrlManagerService";

export type historyParameter = { pathname: string; search: string };

//
// Build URL
//
export default class HistoryUrlBuilder {
  static buildUrl(path: string, pagination: PaginationModel, detail: DetailViewStateModel): historyParameter {
    var params = UrlManagerService.createUrlParams(pagination, detail);
    var result = { pathname: path, search: params };
    return result;
  }
}

import DetailViewStateModel from "../../contexts/ListDetailContext.tsx/models/DetailViewStateModel";
import PaginationStateModel from "../../contextsCommonModels/PaginationStateModel";


export default class ListDetailUrlManager {

    static createUrlParams(pagination: PaginationStateModel | null, detail: DetailViewStateModel | null): string {

        var params = '';

        if (pagination) {
            params = `${params}?page=${pagination.pageNumber}` +
                `&sortCol=${pagination.sortColumn}` +
                `&sortDir=${pagination.sortDirection}` +
                `&page=${pagination.pageNumber}` +
                `&pageRows=${pagination.rowsPerPage}`;
        }

        if (detail) {
            if (detail.viewType) {
                params = `${params}&detail=${detail.viewType}`;
            }
            if (detail.detailKey) {
                params = `${params}&detailKey=${detail.detailKey}`;
            }
        }
        return params;
    }

}
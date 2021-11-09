import { EnumDetailViewType } from "../../constants/EnumDetailViewType";
import PaginationStateModel from "../../contextsCommonModels/PaginationStateModel";


export default class ListDetailUrlManager {

    static createUrlParams(pagination: PaginationStateModel | null, detailView: EnumDetailViewType, detailKey: number | undefined): string {

        var params = '';

        if (pagination) {
            params = `${params}?page=${pagination.pageNumber}` +
                `&sortCol=${pagination.sortColumn}` +
                `&sortDir=${pagination.sortDirection}` +
                `&page=${pagination.pageNumber}` +
                `&pageRows=${pagination.rowsPerPage}`;
        }

        if (detailView !== EnumDetailViewType.none) {
            params = `${params}&detail=${detailView}&detailKey=${detailKey}`
        }
        return params;
    }

}
import DataListApiModel from "../entities/DataListApiModel";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import RepositoryRoleListParams from "./models/RepositoryRoleListParams";
import RoleApiModel from "../entities/RoleApiModel";
import SortRoles from "../../dataSorters/SortRoles";

export default class ApiRepositoryRoleList {
  //
  // Get List Of roles
  //
  async getRolesAsync(params: RepositoryRoleListParams): Promise<DataListApiModel<RoleApiModel>> {
    console.log("######################################## ApiRepositoryRoleList:getRolesAsync");
    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let fullList = fakeApi.roles!;

    // sort
    fullList = SortRoles.sortData(fullList, params.sortColumn, params.sortDirection);

    var skip = (params.pageNo - 1) * params.rowsPerPage;
    if (skip < 0) {
      skip = 0;
    }

    const rowsOnPage = fullList.slice(skip, skip + params.rowsPerPage);

    // create response
    var dataList = new DataListApiModel(rowsOnPage, params.rowsPerPage, fullList.length);

    return dataList;
  }
}

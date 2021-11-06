import { EnumSortColumn } from "../../constants/EnumSortColumn";
import { EnumSortDirection } from "../../constants/EnumSortDirectory";
import DataListApiModel from "../models/DataListApiModel";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import RoleApiModel from "../models/RoleApiModel";
import SortRoles from "../sorters/SortRoles";

export default class ApiRepositoryRoleList {
  //
  // Get List Of roles
  //
  async getRolesAsync(sortColumn: EnumSortColumn, sortDirection: EnumSortDirection, pageNo: number, rowsPerPage: number): Promise<DataListApiModel<RoleApiModel>> {
    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let fullList = fakeApi.roles!;

    // sort
    fullList = SortRoles.sortData(fullList, sortColumn, sortDirection);

    var skip = (pageNo - 1) * rowsPerPage;
    if (skip < 0) {
      skip = 0;
    }

    const rowsOnPage = fullList.slice(skip, skip + rowsPerPage);

    // create response
    var dataList = new DataListApiModel(rowsOnPage, rowsPerPage, fullList.length);

    return dataList;
  }
}

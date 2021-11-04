import { EnumSortColumn } from "../../constants/EnumSortColumn";
import { EnumSortDirection } from "../../constants/EnumSortDirectory";
import DataListApiModel from "../models/DataListApiModel";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import SortTeams from "../sorters/SortTeams";
import TeamApiModel from "../models/TeamApiModel";

export default class ApiRepositoryTeamList {
  //
  // Get List Of Teams
  //
  async getTeamsAsync(sortColumn: EnumSortColumn, sortDirection: EnumSortDirection, pageNo: number, rowsPerPage: number): Promise<DataListApiModel<TeamApiModel>> {
    // artificial delay
    await MockUtilities.delayAsync(20);

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let fullList = fakeApi.teams!;

    // sort
    fullList = SortTeams.sortData(fullList, sortColumn, sortDirection);

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

import DataListApiModel from "../models/DataListApiModel";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import RepositoryTeamListParams from "./models/RepositoryTeamListParams";
import SortTeams from "../../dataSorters/SortTeams";
import TeamApiModel from "../models/TeamApiModel";

export default class ApiRepositoryTeamList {
  //
  // Get List Of Teams
  //
  async getTeamsAsync(params: RepositoryTeamListParams): Promise<DataListApiModel<TeamApiModel>> {
    console.log("######################################## ApiRepositoryTeamList:getTeamsAsync");

    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let fullList = fakeApi.teams!;

    // sort
    fullList = SortTeams.sortData(fullList, params.sortColumn, params.sortDirection);

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

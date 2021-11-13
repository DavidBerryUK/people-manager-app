import DataListApiModel from "../models/DataListApiModel";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import PersonApiModel from "../models/PersonApiModel";
import RepositoryPeopleListParams from "./models/RepositoryPeopleListParams";
import SortPeople from "../sorters/SortPeople";

export default class ApiRepositoryPeopleList {
  //
  // Get List Of People
  //
  async getPeopleAsync(params: RepositoryPeopleListParams): Promise<DataListApiModel<PersonApiModel>> {
    console.log("######################################## ApiRepositoryPeopleList:getPeopleAsync");

    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let fullList = fakeApi.people!;

    // sort
    fullList = SortPeople.sortData(fullList, params.sortColumn, params.sortDirection);

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

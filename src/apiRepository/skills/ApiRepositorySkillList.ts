import DataListApiModel from "../models/DataListApiModel";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import RepositorySkillListParams from "./models/RepositorySkillListParams";
import SkillApiModel from "../models/SkillApiModel";
import SortSkills from "../sorters/SortSkills";

export default class ApiRepositorySkillList {
  //
  // Get List Of Skills
  //
  async getSkillsAsync(params: RepositorySkillListParams): Promise<DataListApiModel<SkillApiModel>> {
    console.log("######################################## ApiRepositorySkillList:getSkillsAsync");

    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let fullList = fakeApi.skills!;

    // sort
    fullList = SortSkills.sortData(fullList, params.sortColumn, params.sortDirection);

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

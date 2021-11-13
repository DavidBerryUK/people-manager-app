import DataListApiModel from "../models/DataListApiModel";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import ProjectApiModel from "../models/ProjectApiModel";
import RepositoryProjectListParams from "./models/RepositoryProjectListParams";
import SortProjects from "../sorters/SortProjects";

export default class ApiRepositorySkillList {
  //
  // Get List Of Projects
  //
  async getProjectsAsync(params: RepositoryProjectListParams): Promise<DataListApiModel<ProjectApiModel>> {
    console.log("######################################## ApiRepositoryProjectsList:getProjectsAsync");

    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let fullList = fakeApi.projects!;

    // sort
    fullList = SortProjects.sortData(fullList, params.sortColumn, params.sortDirection);

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

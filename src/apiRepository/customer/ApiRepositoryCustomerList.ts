import DataListApiModel from "../entities/DataListApiModel";
import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import CustomerApiModel from "../entities/CustomerApiModel";
import RepositoryCustomerListParams from "./models/RepositoryCustomerListParams";
import SortCustomers from "../../dataSorters/SortCustomers";

export default class ApiRepositoryCustomerList {
  //
  // Get List Of Customers
  //
  async getCustomersAsync(params: RepositoryCustomerListParams): Promise<DataListApiModel<CustomerApiModel>> {
    console.log("######################################## ApiRepositoryCustomersList:getCustomersAsync");

    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let fullList = fakeApi.customers!;

    // sort
    fullList = SortCustomers.sortData(fullList, params.sortColumn, params.sortDirection);

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

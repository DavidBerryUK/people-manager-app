import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import CustomerApiModel from "../models/CustomerApiModel";

export default class ApiRepositoryCustomer {
  //
  // Get a Customer
  //
  async getCustomerAsync(customerId: number): Promise<CustomerApiModel> {
    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of customers from fake api
    const fakeApi = new FakeApiEndpoint();
    let customers = fakeApi.customers?.filter((customer) => {
      return customer.id === customerId;
    });
    if (customers === undefined || customers.length === 0) {
      return new CustomerApiModel();
    }
    return customers[0];
  }
}

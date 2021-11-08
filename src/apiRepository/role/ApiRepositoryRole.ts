import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import RoleApiModel from "../models/RoleApiModel";

export default class ApiRepositoryRole {
  //
  // Get a Role
  //
  async getRoleAsync(roleId: number): Promise<RoleApiModel> {
    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let roles = fakeApi.roles?.filter((role) => {
      return role.id === roleId;
    });
    if (roles === undefined || roles.length === 0) {
      return new RoleApiModel();
    }
    return roles[0];
  }
}

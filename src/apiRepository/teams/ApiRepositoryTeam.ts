import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import TeamApiModel from "../entities/TeamApiModel";

export default class ApiRepositoryTeam {
  //
  // Get a team
  //
  async getTeamAsync(teamId: number): Promise<TeamApiModel> {
    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of Team from fake api
    const fakeApi = new FakeApiEndpoint();
    let teams = fakeApi.teams?.filter((team) => {
      return team.id === teamId;
    });
    if (teams === undefined || teams.length === 0) {
      return new TeamApiModel();
    }
    return teams[0];
  }
}

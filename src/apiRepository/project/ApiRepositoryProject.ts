import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import ProjectApiModel from "../models/ProjectApiModel";

export default class ApiRepositoryProject {
  //
  // Get a Skill
  //
  async getProjectAsync(skillId: number): Promise<ProjectApiModel> {
    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let projects = fakeApi.projects?.filter((project) => {
      return project.id === skillId;
    });
    if (projects === undefined || projects.length === 0) {
      return new ProjectApiModel();
    }
    return projects[0];
  }
}

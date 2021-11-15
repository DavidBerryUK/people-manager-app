import FakeApiEndpoint from "../dataSources/FakeApiEndpoint";
import MockUtilities from "../../utilities/MockUtilities";
import ProjectApiModel from "../entities/ProjectApiModel";

export default class ApiRepositoryProject {
  //
  // Get a Project
  //
  async getProjectAsync(projectId: number): Promise<ProjectApiModel> {
    // artificial delay
    await MockUtilities.demoNetworkDelayAsync();

    // get copy of people from fake api
    const fakeApi = new FakeApiEndpoint();
    let projects = fakeApi.projects?.filter((project) => {
      return project.id === projectId;
    });
    if (projects === undefined || projects.length === 0) {
      return new ProjectApiModel();
    }
    return projects[0];
  }
}

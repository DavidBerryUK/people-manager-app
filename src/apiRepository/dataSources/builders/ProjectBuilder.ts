import ProjectApiModel from "../../entities/ProjectApiModel";
import CreateProjectStages from "./stages/CreateProjectStages";

export default class ProjectBuilder {
  createTestData(project: ProjectApiModel) {
    const createStages = new CreateProjectStages(project);
    createStages.create(project);
  }
}

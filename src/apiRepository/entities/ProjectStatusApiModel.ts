import ProjectApiModel from "./ProjectApiModel";

export default class ProjectStatusApiModel {
  id: number;
  name: string;
  projects: Array<ProjectApiModel>;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.projects = new Array<ProjectApiModel>();
  }
}

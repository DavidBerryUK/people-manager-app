import ProjectApiModel from "./ProjectApiModel";

export default class CustomerApiModel {
  id: number;
  name: string;
  projects: Array<ProjectApiModel>;

  constructor(id?: number, name?: string) {
    this.id = id || 0;
    this.name = name || "";
    this.projects = new Array<ProjectApiModel>();
  }
}

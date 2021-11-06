import PersonApiModel from "./PersonApiModel";

export default class RoleApiModel {
  id: number;
  name: string;
  people: Array<PersonApiModel>;

  constructor(id?: number, name?: string) {
    this.id = id || 0;
    this.name = name || "";
    this.people = new Array<PersonApiModel>();
  }
}

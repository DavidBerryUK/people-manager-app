import PersonApiModel from "./PersonApiModel";

export default class TeamApiModel {
  id: number;
  name: string;
  people: Array<PersonApiModel>;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.people = new Array<PersonApiModel>();
  }
}

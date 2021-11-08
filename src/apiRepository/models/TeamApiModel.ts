import PersonApiModel from "./PersonApiModel";

export default class TeamApiModel {
  id: number;
  name: string;
  iconName: string;
  people: Array<PersonApiModel>;

  constructor(id?: number, name?: string, iconName?: string) {
    this.id = id || 0;
    this.name = name || "";
    this.iconName = iconName || "";
    this.people = new Array<PersonApiModel>();
  }
}

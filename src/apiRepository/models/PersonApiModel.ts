import SkillLevelApiModel from "./SkillLevelApiModel";
import TeamApiModel from "./TeamApiModel";

export default class PersonApiModel {
  id: number;
  userName: string;
  forename: string;
  surname: string;
  email: string;
  skills: Array<SkillLevelApiModel>;
  teams: Array<TeamApiModel>;

  constructor(id?: number, forename?: string, surname?: string) {
    this.id = id || 0;
    this.forename = forename || "";
    this.surname = surname || "";
    this.userName = "";
    this.email = `${forename}.${surname}@acme.com`;
    this.skills = new Array<SkillLevelApiModel>();
    this.teams = new Array<TeamApiModel>();

    if (this.surname !== undefined && this.forename !== undefined) {
      this.userName = this.surname.substring(0, 1) + this.forename;
    }
  }
}

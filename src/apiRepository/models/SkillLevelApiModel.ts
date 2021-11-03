import SkillApiModel from "./SkillApiModel";

export default class SkillLevelApiModel {
  skill: SkillApiModel;
  level: number;

  constructor(skill: SkillApiModel, level: number) {
    this.skill = skill;
    this.level = level;
  }
}

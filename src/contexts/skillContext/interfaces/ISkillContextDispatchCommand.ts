import { SkillContextProps } from "../SkillContext";

export interface ISkillContextDispatchCommand {
  execute(state: SkillContextProps): SkillContextProps;
}

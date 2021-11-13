import DataListApiModel from "../../../apiRepository/models/DataListApiModel";
import SkillApiModel from "../../../apiRepository/models/SkillApiModel";
import RepositorySkillListParams from "../../../apiRepository/skills/models/RepositorySkillListParams";
import { ISkillContextDispatchCommand } from "../interfaces/ISkillContextDispatchCommand";
import { SkillContextProps } from "../SkillContext";
//
// Set Skill List

//
export default class CommandSkillListSet implements ISkillContextDispatchCommand {
  skillList: DataListApiModel<SkillApiModel>;
  skillListParameters: RepositorySkillListParams;

  // Create the command with all data needed to update
  //  the state
  constructor(skillList: DataListApiModel<SkillApiModel>, skillListParameters: RepositorySkillListParams) {
    this.skillList = skillList;
    this.skillListParameters = skillListParameters;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: SkillContextProps): SkillContextProps {
    const newSkillListParameters = this.skillListParameters.clone();

    return {
      ...state,
      skillList: this.skillList,
      previousSkillListParameters: newSkillListParameters,
    };
  }
}

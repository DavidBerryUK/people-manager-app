//
// Set Skill List

import { ISkillContextDispatchCommand } from "../interfaces/ISkillContextDispatchCommand";
import { SkillContextProps } from "../SkillContext";

export default class CommandPageNumberSet implements ISkillContextDispatchCommand {
  pageNumber: number;

  // Create the command with all data needed to update
  //  the state
  constructor(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: SkillContextProps): SkillContextProps {
    const pagination = state.pagination.clone();
    pagination.pageNo = this.pageNumber;

    return {
      ...state,
      pagination: pagination,
    };
  }
}

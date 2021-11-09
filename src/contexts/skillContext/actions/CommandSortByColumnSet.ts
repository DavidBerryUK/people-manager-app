//
// Set Skill List
import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { ISkillContextDispatchCommand } from "../interfaces/ISkillContextDispatchCommand";
import { SkillContextProps } from "../SkillContext";

//
export default class CommandSortByColumnSet implements ISkillContextDispatchCommand {
  sortByColumn: EnumSortColumn;

  // Create the command with all data needed to update
  //  the state
  constructor(sortByColumn: EnumSortColumn) {
    this.sortByColumn = sortByColumn;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: SkillContextProps): SkillContextProps {
    const pagination = state.pagination.clone();
    pagination.sortColumn = this.sortByColumn;

    return {
      ...state,
      pagination: pagination
    };
  }
}

//
// Set Skill List
import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { EnumSortDirection } from "../../../constants/EnumSortDirectory";
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
    var sortColumn = state.sortColumn;
    var sortDirection = state.sortDirection;

    if (sortColumn === this.sortByColumn) {
      // toggle direction
      if (sortDirection === EnumSortDirection.asc) {
        sortDirection = EnumSortDirection.desc;
      } else {
        sortDirection = EnumSortDirection.asc;
      }
    } else {
      sortColumn = this.sortByColumn;
      sortDirection = EnumSortDirection.asc;
    }

    return {
      ...state,
      sortColumn: sortColumn,
      sortDirection: sortDirection,
    };
  }
}

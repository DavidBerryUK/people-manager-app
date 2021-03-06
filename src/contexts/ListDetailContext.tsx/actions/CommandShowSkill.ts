// User has selected a different
import { IListDetailDispatchCommand } from "../interfaces/IListDetailContextDispatchCommand";
import { ListDetailContextProps } from "../ListDetailContext";

//
export default class CommandShowSkill implements IListDetailDispatchCommand {
  skillId: number;

  // Create the command with all data needed to update
  //  the state
  constructor(skillId: number) {
    this.skillId = skillId;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ListDetailContextProps): ListDetailContextProps {
    var detailView = state.detailView.clone();
    detailView.skillId = this.skillId;

    return {
      ...state,
      detailView: detailView
    };
  }
}

// User has selected a different
import { IListDetailDispatchCommand } from "../interfaces/IListDetailContextDispatchCommand";
import { ListDetailContextProps } from "../ListDetailContext";

//
export default class CommandShowProjectStatus implements IListDetailDispatchCommand {
  projectStatusId: number;

  // Create the command with all data needed to update
  //  the state
  constructor(projectStatusId: number) {
    this.projectStatusId = projectStatusId;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ListDetailContextProps): ListDetailContextProps {
    var detailView = state.detailView.clone();
    detailView.projectStatusId = this.projectStatusId;

    return {
      ...state,
      detailView: detailView,
    };
  }
}

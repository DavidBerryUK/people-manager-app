// User has selected a different
import { IListDetailDispatchCommand } from "../interfaces/IListDetailContextDispatchCommand";
import { ListDetailContextProps } from "../ListDetailContext";

//
export default class CommandShowProject implements IListDetailDispatchCommand {
  projectId: number;

  // Create the command with all data needed to update
  //  the state
  constructor(projectId: number) {
    this.projectId = projectId;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ListDetailContextProps): ListDetailContextProps {
    var detailView = state.detailView.clone();
    detailView.projectId = this.projectId;

    return {
      ...state,
      detailView: detailView,
    };
  }
}

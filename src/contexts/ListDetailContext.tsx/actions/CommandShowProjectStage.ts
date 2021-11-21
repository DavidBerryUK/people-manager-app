// User has selected a different
import { IListDetailDispatchCommand } from "../interfaces/IListDetailContextDispatchCommand";
import { ListDetailContextProps } from "../ListDetailContext";

//
export default class CommandShowProjectStage implements IListDetailDispatchCommand {
  projectStageId: number;

  // Create the command with all data needed to update
  //  the state
  constructor(projectStageId: number) {
    this.projectStageId = projectStageId;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ListDetailContextProps): ListDetailContextProps {
    var detailView = state.detailView.clone();
    detailView.projectStageId = this.projectStageId;

    return {
      ...state,
      detailView: detailView,
    };
  }
}

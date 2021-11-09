// User has selected a different
import { IListDetailDispatchCommand } from "../interfaces/IListDetailContextDispatchCommand";
import { ListDetailContextProps } from "../ListDetailContext";

//
export default class CommandShowPerson implements IListDetailDispatchCommand {
  personId: number;

  // Create the command with all data needed to update
  //  the state
  constructor(personId: number) {
    this.personId = personId;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ListDetailContextProps): ListDetailContextProps {

    var detailView = state.detailView;
    detailView.personId = this.personId;

    return {
      ...state,
      detailView: detailView
    };
  }
}

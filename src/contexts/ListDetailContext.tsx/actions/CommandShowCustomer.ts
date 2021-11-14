// User has selected a different
import { IListDetailDispatchCommand } from "../interfaces/IListDetailContextDispatchCommand";
import { ListDetailContextProps } from "../ListDetailContext";

//
export default class CommandShowCustomer implements IListDetailDispatchCommand {
  customerId: number;

  // Create the command with all data needed to update
  //  the state
  constructor(customerId: number) {
    this.customerId = customerId;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ListDetailContextProps): ListDetailContextProps {
    var detailView = state.detailView.clone();
    detailView.customerId = this.customerId;

    return {
      ...state,
      detailView: detailView,
    };
  }
}

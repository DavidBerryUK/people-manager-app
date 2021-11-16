// User has selected a different
import { EnumToolbar } from "../../../constants/enums/EnumToolbar";
import { IListDetailDispatchCommand } from "../interfaces/IListDetailContextDispatchCommand";
import { ListDetailContextProps } from "../ListDetailContext";

//
export default class CommandShowToolbar implements IListDetailDispatchCommand {
  toolbar: EnumToolbar;

  // Create the command with all data needed to update
  //  the state
  constructor(toolbar: EnumToolbar) {
    this.toolbar = toolbar;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ListDetailContextProps): ListDetailContextProps {

    console.log("Set Toolbar");

    return {
      ...state,
      toolbar: this.toolbar
    };
  }
}

import { EnumTheme } from "../../../constants/EnumTheme";
import { ApplicationContextProps } from "../ApplicationContext";
import { EnumApplicationContextAction, IApplicationContextDispatchCommand } from "../interfaces/IApplicationContextDispatchCommand";

//
// User has selected a different themere
//
export default class CommandThemeSet implements IApplicationContextDispatchCommand {
  theme: EnumTheme;

  // identify the command type, useful for debugging
  readonly commandType: EnumApplicationContextAction = EnumApplicationContextAction.Authenticated;

  // Create the command with all data needed to update
  //  the state
  constructor(theme: EnumTheme) {
    this.theme = theme;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ApplicationContextProps): ApplicationContextProps {
    return {
      ...state,
      theme: this.theme,
    };
  }
}

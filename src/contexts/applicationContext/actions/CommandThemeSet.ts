import { EnumTheme } from "../../../constants/enums/EnumTheme";
import { ApplicationContextProps } from "../ApplicationContext";
import { IApplicationContextDispatchCommand } from "../interfaces/IApplicationContextDispatchCommand";

//
// User has selected a different theme
//
export default class CommandThemeSet implements IApplicationContextDispatchCommand {
  theme: EnumTheme;

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

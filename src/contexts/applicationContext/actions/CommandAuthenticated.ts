import { ApplicationContextProps } from "../ApplicationContext";
import { EnumApplicationContextAction, IApplicationContextDispatchCommand } from "../interfaces/IApplicationContextDispatchCommand";

//
// User has been authenticated via SSO
//
export default class CommandAuthenticated implements IApplicationContextDispatchCommand {
  accessToken: string;
  userId: string;


  // identify the command type, useful for debugging
  readonly commandType: EnumApplicationContextAction = EnumApplicationContextAction.Authenticated;

  // Create the command with all data needed to update
  //  the state
  constructor(accessToken: string, userId: string) {
    this.accessToken = accessToken;
    this.userId = userId;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ApplicationContextProps): ApplicationContextProps {
    return {
      ...state,
    };
  }
}

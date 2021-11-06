import { ApplicationContextProps } from "../ApplicationContext";
import { IApplicationContextDispatchCommand } from "../interfaces/IApplicationContextDispatchCommand";

//
// User has been authenticated via SSO
//
export default class CommandAuthenticated implements IApplicationContextDispatchCommand {
  accessToken: string;
  userId: string;

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

import { ApplicationContextProps } from "../ApplicationContext";

export enum EnumApplicationContextAction {
    Authenticated = 0,    
    AuthenticationExpired = 1,
    UpdateUserToken = 2,
    UpdateWithSessionData = 3
}
export interface IApplicationContextDispatchCommand {
    readonly commandType: EnumApplicationContextAction;
    execute(state: ApplicationContextProps) : ApplicationContextProps;
}

import { CustomerContextProps } from "../CustomerContext";

export interface ICustomerContextDispatchCommand {
  execute(state: CustomerContextProps): CustomerContextProps;
}

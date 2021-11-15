import { ICustomerContextDispatchCommand } from "../interfaces/ICustomerContextDispatchCommand";
import { CustomerContextProps } from "../CustomerContext";
import DataListApiModel from "../../../apiRepository/entities/DataListApiModel";
import CustomerApiModel from "../../../apiRepository/entities/CustomerApiModel";
import RepositoryCustomerListParams from "../../../apiRepository/customer/models/RepositoryCustomerListParams";

//
// Set Customer List

//
export default class CommandCustomerListSet implements ICustomerContextDispatchCommand {
  customerList: DataListApiModel<CustomerApiModel>;
  customerListParameters: RepositoryCustomerListParams;

  // Create the command with all data needed to update
  //  the state
  constructor(customerList: DataListApiModel<CustomerApiModel>, customerListParameters: RepositoryCustomerListParams) {
    this.customerList = customerList;
    this.customerListParameters = customerListParameters;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: CustomerContextProps): CustomerContextProps {
    const newCustomerListParameters = this.customerListParameters.clone();

    return {
      ...state,
      customerList: this.customerList,
      previousCustomerListParameters: newCustomerListParameters,
    };
  }
}

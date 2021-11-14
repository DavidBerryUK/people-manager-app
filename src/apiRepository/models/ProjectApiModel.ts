import CustomerApiModel from "./CustomerApiModel";

export default class ProjectApiModel {
  id: number;
  name: string;
  customer: CustomerApiModel;

  constructor(id?: number, name?: string, customer?: CustomerApiModel) {
    this.id = id || 0;
    this.name = name || "";
    this.customer = customer || new CustomerApiModel();
  }
}

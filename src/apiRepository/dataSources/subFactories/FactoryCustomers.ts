import { EnumCustomer } from "../../enums/EnumCustomer";
import CustomerApiModel from "../../entities/CustomerApiModel";

//
// Create list of customers
//
export default class FactoryCustomers {
  static createList(): Array<CustomerApiModel> {
    const list = new Array<CustomerApiModel>();

    list.push(new CustomerApiModel(EnumCustomer.HealthCareSpecialists, "Health Care Specialists"));
    list.push(new CustomerApiModel(EnumCustomer.CarInsurance, "Car Insurance"));
    list.push(new CustomerApiModel(EnumCustomer.GlobalBank, "Global Bank"));
    list.push(new CustomerApiModel(EnumCustomer.HouseInsurance, "House Insurance"));
    list.push(new CustomerApiModel(EnumCustomer.MetalsIncorporated, "Metals Incorporated"));
    list.push(new CustomerApiModel(EnumCustomer.MobilePhoneShop, "Mobile Phone Shop"));
    list.push(new CustomerApiModel(EnumCustomer.NorthernUkBank, "Northern Uk Bank"));
    list.push(new CustomerApiModel(EnumCustomer.PensionsUkLtd, "Pensions Uk Ltd"));
    list.push(new CustomerApiModel(EnumCustomer.RetailKitchenware, "Retail Kitchenware"));
    list.push(new CustomerApiModel(EnumCustomer.RuggedCampingShop, "Rugged Camping Shop"));
    list.push(new CustomerApiModel(EnumCustomer.VehicleRentals, "Vehicle Rentals"));
    list.push(new CustomerApiModel(EnumCustomer.VehicleServicingLtd, "Vehicle Servicing Ltd"));

    return list;
  }
}

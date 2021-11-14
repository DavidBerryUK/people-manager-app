import { EnumCustomer } from "../enums/EnumCustomer";
import CustomerApiModel from "../models/CustomerApiModel";

//
// Create list of customers
//
export default class FactoryCustomers {
  static createList(): Array<CustomerApiModel> {
    const list = new Array<CustomerApiModel>();

    list.push(new CustomerApiModel(EnumCustomer.CareHireSpecialists, "CareHireSpecialists"));
    list.push(new CustomerApiModel(EnumCustomer.CareInsurance, "CareInsurance, "));
    list.push(new CustomerApiModel(EnumCustomer.GlobalBank, "GlobalBank"));
    list.push(new CustomerApiModel(EnumCustomer.HealthCareUK, "HealthCareUK"));
    list.push(new CustomerApiModel(EnumCustomer.HouseInsurance, "HouseInsurance"));
    list.push(new CustomerApiModel(EnumCustomer.MetalsIncorporated, "MetalsIncorporated"));
    list.push(new CustomerApiModel(EnumCustomer.MobilePhoneShop, "MobilePhoneShop"));
    list.push(new CustomerApiModel(EnumCustomer.NorthernUkBank, "NorthernUkBank"));
    list.push(new CustomerApiModel(EnumCustomer.PensionsUkLtd, "PensionsUkLtd"));
    list.push(new CustomerApiModel(EnumCustomer.RetailKitchenware, "RetailKitchenware"));
    list.push(new CustomerApiModel(EnumCustomer.RuggedCampingShop, "RuggedCampingShop"));
    list.push(new CustomerApiModel(EnumCustomer.VehicleRentals, "VehicleRentals"));
    list.push(new CustomerApiModel(EnumCustomer.VehicleServicingLtd, "VehicleServicingLtd"));

    return list;
  }
}

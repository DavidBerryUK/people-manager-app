import CustomerApiModel from "../../entities/CustomerApiModel";
import ProjectApiModel from "../../entities/ProjectApiModel";
import ProjectStatusApiModel from "../../entities/ProjectStatusApiModel";
import ProjectForCustomerCareHireSpecialists from "./../projects/ProjectForCustomerCareHireSpecialists";
import ProjectForCustomerCarInsurance from "./../projects/ProjectForCustomerCarInsurance";
import ProjectForCustomerGlobalBank from "./../projects/ProjectForCustomerGlobalBank";
import ProjectForCustomerHouseInsurance from "./../projects/ProjectForCustomerHouseInsurance";
import ProjectForCustomerMetalsIncorporated from "./../projects/ProjectForCustomerMetalsIncorporated";
import ProjectForCustomerMobilePhoneShop from "./../projects/ProjectForCustomerMobilePhoneShop";
import ProjectForCustomerNorthernBank from "./../projects/ProjectForCustomerNorthernBank";
import ProjectForCustomerPensionsUkLtd from "./../projects/ProjectForCustomerPensionsUkLtd";
import ProjectForCustomerRetailKitchenware from "./../projects/ProjectForCustomerRetailKitchenware";
import ProjectForCustomerRuggedCampingShop from "./../projects/ProjectForCustomerRuggedCampingShop";
import ProjectForCustomerVehicleRentals from "./../projects/ProjectForCustomerVehicleRentals";
import ProjectForCustomerVehicleServicingLtd from "./../projects/ProjectForCustomerVehicleServicingLtd";

//
// Create list of teams
//
export default class FactoryProjects {
  private customers: Array<CustomerApiModel>;
  private projectStatus: Array<ProjectStatusApiModel>;

  constructor(customers: Array<CustomerApiModel>, projectStatus: Array<ProjectStatusApiModel>) {
    this.customers = customers;
    this.projectStatus = projectStatus;
  }

  createList(): Array<ProjectApiModel> {
    let projects = new Array<ProjectApiModel>();

    projects = projects.concat(new ProjectForCustomerCareHireSpecialists(this.customers, this.projectStatus).createProjects());
    projects = projects.concat(new ProjectForCustomerCarInsurance(this.customers, this.projectStatus).createProjects());
    projects = projects.concat(new ProjectForCustomerGlobalBank(this.customers, this.projectStatus).createProjects());
    projects = projects.concat(new ProjectForCustomerHouseInsurance(this.customers, this.projectStatus).createProjects());
    projects = projects.concat(new ProjectForCustomerMetalsIncorporated(this.customers, this.projectStatus).createProjects());
    projects = projects.concat(new ProjectForCustomerMobilePhoneShop(this.customers, this.projectStatus).createProjects());
    projects = projects.concat(new ProjectForCustomerNorthernBank(this.customers, this.projectStatus).createProjects());
    projects = projects.concat(new ProjectForCustomerPensionsUkLtd(this.customers, this.projectStatus).createProjects());
    projects = projects.concat(new ProjectForCustomerRetailKitchenware(this.customers, this.projectStatus).createProjects());
    projects = projects.concat(new ProjectForCustomerRuggedCampingShop(this.customers, this.projectStatus).createProjects());
    projects = projects.concat(new ProjectForCustomerVehicleRentals(this.customers, this.projectStatus).createProjects());
    projects = projects.concat(new ProjectForCustomerVehicleServicingLtd(this.customers, this.projectStatus).createProjects());

    return projects;
  }
}

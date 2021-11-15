import { EnumCustomer } from "../enums/EnumCustomer";
import { EnumProject } from "../enums/EnumProject";
import { EnumProjectStatus } from "../enums/EnumProjectStatus";
import CustomerApiModel from "../entities/CustomerApiModel";
import ProjectApiModel from "../entities/ProjectApiModel";
import ProjectStatusApiModel from "../entities/ProjectStatusApiModel";

//
// Create list of teams
//
export default class FactoryProjects {
  private list = new Array<ProjectApiModel>();
  private customerDictionary: { [id: number]: CustomerApiModel };
  private projectStatusDictionary: { [id: number]: ProjectStatusApiModel };

  constructor(customers: Array<CustomerApiModel>, projectStatus: Array<ProjectStatusApiModel>) {
    //
    // create dictionary for arrays
    //
    this.customerDictionary = customers.reduce((a, x) => ({ ...a, [x.id]: x }), {});
    this.projectStatusDictionary = projectStatus.reduce((a, x) => ({ ...a, [x.id]: x }), {});
  }

  createList(): Array<ProjectApiModel> {
    //
    // CareHireSpecialists
    //
    this.add(EnumProject.PatientCareRecords, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Active, "Patient Care Records - Internal System Creation");
    this.add(EnumProject.PatientPharmacyReview, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Closed, "Patient Pharmacy Review");
    this.add(EnumProject.LabResultsIntegration, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Closed, "Lab Result Integration");
    this.add(EnumProject.CovidVaccinationInvite, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Active, "Covid Vaccination Invite");
    this.add(EnumProject.TestAndTraceApp, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Active, "Test and Trace App");
    this.add(EnumProject.ManagementTimeAndMotionStudy, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Tendering, "Management Time and Motion Study");
    this.add(EnumProject.ManagementEfficiencyReview, EnumCustomer.HealthCareSpecialists, EnumProjectStatus.Tendering, "Management Efficiency Review");

    //
    // Car Insurance
    //
    this.add(EnumProject.MyAccount, EnumCustomer.CarInsurance, EnumProjectStatus.Active, "My Account Functions");
    this.add(EnumProject.QuickQuote, EnumCustomer.CarInsurance, EnumProjectStatus.Closed, "Quick Quotes");
    this.add(EnumProject.AutoRenew, EnumCustomer.CarInsurance, EnumProjectStatus.Active, "Auto Renew Policies");
    this.add(EnumProject.SubscriptionManager, EnumCustomer.CarInsurance, EnumProjectStatus.PreSales, "Contact Subscription Manager");
    this.add(EnumProject.DocumentManagement, EnumCustomer.CarInsurance, EnumProjectStatus.Active, "Document Management");
    this.add(EnumProject.QuoteStorage, EnumCustomer.CarInsurance, EnumProjectStatus.Active, "Quote Storage");
    this.add(EnumProject.LoginSecurityUpdate, EnumCustomer.CarInsurance, EnumProjectStatus.PreSales, "Login Security Updates");

    //
    // Global Bank
    //
    this.add(EnumProject.AccountCentralAuditing, EnumCustomer.GlobalBank, EnumProjectStatus.Active, "Account Central Auditing");
    this.add(EnumProject.CustomerServicesUi, EnumCustomer.GlobalBank, EnumProjectStatus.Closed, "Customer Services UI Enhancements");
    this.add(EnumProject.FraudAiDetection, EnumCustomer.GlobalBank, EnumProjectStatus.Active, "Fraud AI Detection");
    this.add(EnumProject.RegulationReview2019, EnumCustomer.GlobalBank, EnumProjectStatus.Closed, "Regulation Review 2019");
    this.add(EnumProject.RegulationReview2020, EnumCustomer.GlobalBank, EnumProjectStatus.Closed, "Regulation Review 2020");
    this.add(EnumProject.RegulationReview2021, EnumCustomer.GlobalBank, EnumProjectStatus.Active, "Regulation Review 2021");

    //
    // House Insurance
    //
    this.add(EnumProject.ApiPerformanceImprovements, EnumCustomer.HouseInsurance, EnumProjectStatus.Closed, "Api Performance Improvements");
    this.add(EnumProject.CustomerSiteRefresh, EnumCustomer.HouseInsurance, EnumProjectStatus.Closed, "Customer Site Refresh");
    this.add(EnumProject.FastQuote, EnumCustomer.HouseInsurance, EnumProjectStatus.Active, "Fast Quote");
    this.add(EnumProject.QuoteUptakeAnalysis, EnumCustomer.HouseInsurance, EnumProjectStatus.Paused, "Quote Uptake Analysis");
    this.add(EnumProject.SocialMediaMarketing, EnumCustomer.HouseInsurance, EnumProjectStatus.PreSales, "Social Media Marketing");

    //
    // Metals Incorporated
    //
    this.add(EnumProject.BackOfficePaymentTransfers, EnumCustomer.MetalsIncorporated, EnumProjectStatus.Closed, "Back Office payments transfers");
    this.add(EnumProject.IosCustomerIdentiyVerification, EnumCustomer.MetalsIncorporated, EnumProjectStatus.Closed, "IOS Application, Customer Identification and Verification");
    this.add(EnumProject.IosMetalsTransfersAuditing, EnumCustomer.MetalsIncorporated, EnumProjectStatus.Active, "IOS Application, Goods transfer auditing");
    this.add(EnumProject.PaymentReporting, EnumCustomer.MetalsIncorporated, EnumProjectStatus.Active, "Payment Reporting");

    //
    // Mobile Phone Shop
    //
    this.add(EnumProject.IosCustomerApp, EnumCustomer.MobilePhoneShop, EnumProjectStatus.Closed, "IOS Application, Customer");
    this.add(EnumProject.IosNetworkCoverageMap, EnumCustomer.MobilePhoneShop, EnumProjectStatus.PreSales, "IOS Application, network coverage");
    this.add(EnumProject.CustomerFeedback, EnumCustomer.MobilePhoneShop, EnumProjectStatus.Proposal, "Customer Feedback Portal");

    //
    // Northern Bank
    //
    this.add(EnumProject.ArchitectureReview, EnumCustomer.NorthernUkBank, EnumProjectStatus.Proposal, "Architecture Review");
    this.add(EnumProject.BusinessReview, EnumCustomer.NorthernUkBank, EnumProjectStatus.Proposal, "Business Review");
    this.add(EnumProject.ScalingArchitecture, EnumCustomer.NorthernUkBank, EnumProjectStatus.Proposal, "Scaling Architecture");
    this.add(EnumProject.AgileTutoring, EnumCustomer.NorthernUkBank, EnumProjectStatus.Closed, "Agile Tutoring");

    //
    // Pensions Uk Ltd
    //
    this.add(EnumProject.InitialScoping, EnumCustomer.PensionsUkLtd, EnumProjectStatus.PreSales, "Initial Scoping");

    //
    // Retail Kitchenware
    //
    this.add(EnumProject.InventorySystemsImprovements, EnumCustomer.RetailKitchenware, EnumProjectStatus.Active, "Product Inventory System");
    this.add(EnumProject.OnlineSalesProtoType, EnumCustomer.RetailKitchenware, EnumProjectStatus.PreSales, "Online Sales Portal");

    //
    // Rugged Camping Shop
    //
    this.add(EnumProject.ShopFloorProductAuditing, EnumCustomer.RuggedCampingShop, EnumProjectStatus.Closed, "Shop Floor Product Stock Level");
    this.add(EnumProject.FastRestockProcess, EnumCustomer.RuggedCampingShop, EnumProjectStatus.Closed, "Fast restock process enhancements");
    this.add(EnumProject.OnlineCustomerOrders, EnumCustomer.RuggedCampingShop, EnumProjectStatus.PreSales, "Online Customer Orders");
    this.add(EnumProject.RealtimeStockLevels, EnumCustomer.RuggedCampingShop, EnumProjectStatus.Active, "realtime Stock Levels");

    //
    // Vehicle Rentals
    //
    this.add(EnumProject.DiscoverPhase, EnumCustomer.VehicleRentals, EnumProjectStatus.PreSales, "Discovery Phase");

    //
    //
    //
    this.add(EnumProject.BackOfficeProcessing, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Closed, "Back Office Processing");
    this.add(EnumProject.ClientPortal, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Closed, "Client Portal");
    this.add(EnumProject.CustomerPortal, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Closed, "Customer Portal");
    this.add(EnumProject.DatabaseArchitectureReview, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Closed, "Database Architecture Review");
    this.add(EnumProject.GarageRepairPortal, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Closed, "Garage Repair Portal");
    this.add(EnumProject.Invoicing, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Paused, "Invoicing");
    this.add(EnumProject.IosCustomerServicingApp, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Paused, "Ios Customer Servicing App");
    this.add(EnumProject.IosEmergencyApp, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Paused, "Ios Emergency App");
    this.add(EnumProject.IosOrderManagementApp, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Active, "Ios OrderManagement App");
    this.add(EnumProject.LiveOrderStatus, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.Active, "Live Order Status");
    this.add(EnumProject.PlatformArchitectureReview, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.PreSales, "Platform Architecture Review");
    this.add(EnumProject.TechnologyRefresh, EnumCustomer.VehicleServicingLtd, EnumProjectStatus.PreSales, "Technology Refresh");

    return this.list;
  }

  private add(project: EnumProject, customer: EnumCustomer, status: EnumProjectStatus, name: string) {
    const customerModel = this.getCustomer(customer);
    const projectStatusModel = this.getProjectStatus(status);

    const projectModel = new ProjectApiModel(project, name, projectStatusModel, customerModel);
    customerModel.projects.push(projectModel);
    projectStatusModel.projects.push(projectModel);
    this.list.push(projectModel);
  }

  getCustomer(id: EnumCustomer): CustomerApiModel {
    return this.customerDictionary[id];
  }

  getProjectStatus(id: EnumProjectStatus): ProjectStatusApiModel {
    return this.projectStatusDictionary[id];
  }
}

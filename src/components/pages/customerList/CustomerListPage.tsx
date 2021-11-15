import { CustomerContextProvider } from "../../../contexts/customerContext/CustomerContext";
import CustomerTableWidget from "../../widgetsDataLists/customerTable/CustomerTableWidget";
import React from "react";
import FilterBar from "../../widgetsUI/filterBar/FilterBar";

const CustomerListPage: React.FC = () => {
  return (
    <CustomerContextProvider>
      <FilterBar>this is the filter bar for customers</FilterBar>
      <CustomerTableWidget />
    </CustomerContextProvider>
  );
};

export default CustomerListPage;

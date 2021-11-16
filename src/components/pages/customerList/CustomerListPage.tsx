import { CustomerContextProvider } from "../../../contexts/customerContext/CustomerContext";
import CustomerTableWidget from "../../widgetsDataLists/customerTable/CustomerTableWidget";
import React from "react";

const CustomerListPage: React.FC = () => {
  return (
    <CustomerContextProvider>
      <CustomerTableWidget />
    </CustomerContextProvider>
  );
};

export default CustomerListPage;

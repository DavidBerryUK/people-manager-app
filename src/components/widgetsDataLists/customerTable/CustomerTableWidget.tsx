import { useCustomerContext } from "../../../contexts/customerContext/CustomerContext";
import ApiRepositoryCustomerList from "../../../apiRepository/customer/ApiRepositoryCustomerList";
import CommandCustomerListSet from "../../../contexts/customerContext/actions/CommandCustomerListSet";
import CommandPageNumberSet from "../../../contexts/customerContext/actions/CommandPageNumberSet";
import CustomerRowWidget from "./CustomerRowWidget";
import CustomerTableHeader from "./CustomerTableHeader";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React, { useMemo } from "react";
import RepositoryCustomerListParams from "../../../apiRepository/customer/models/RepositoryCustomerListParams";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const CustomerTableWidget: React.FC = () => {
  const { state: customerState, dispatch: customerDispatch } = useCustomerContext();

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();
  useDataTableUrlReader();

  useMemo(async () => {
    var params = new RepositoryCustomerListParams(customerState.pagination.sortColumn, customerState.pagination.sortDirection, customerState.pagination.pageNo, customerState.pagination.rowsPerPage);
    if (params.isNotEqualTo(customerState.previousCustomerListParameters)) {
      const apiRepositoryCustomerList = new ApiRepositoryCustomerList();
      const customerList = await apiRepositoryCustomerList.getCustomersAsync(params);
      customerDispatch(new CommandCustomerListSet(customerList, params));
      writeUrlHistory();
    }
  }, [customerDispatch, customerState.pagination, customerState.previousCustomerListParameters, writeUrlHistory]);

  //
  // Event Handlers
  //
  const handleOnPageChangeEvent = (pageNo: number) => {
    // update context with new page number to force data reload
    customerDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <CustomerTableHeader />
        <tbody>
          {customerState.customerList.data.map((row, index) => (
            <CustomerRowWidget key={index} customer={row} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={customerState.pagination.pageNo} pageCount={customerState.customerList.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default CustomerTableWidget;

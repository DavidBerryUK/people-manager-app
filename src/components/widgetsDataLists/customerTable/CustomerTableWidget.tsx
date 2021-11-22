import { EnumToolbar } from "../../../constants/enums/EnumToolbar";
import { useCustomerContext } from "../../../contexts/customerContext/CustomerContext";
import CommandPageNumberSet from "../../../contexts/customerContext/actions/CommandPageNumberSet";
import CustomerRowWidget from "./CustomerRowWidget";
import CustomerTableHeader from "./CustomerTableHeader";
import PaginationWidget from "../../widgetsUI/pagination/PaginationWidget";
import React from "react";
import useCustomerListRepository from "../../hooks/UseCustomerListRepository";
import useDataTableUrlReader from "../../hooks/UseDataTableUrlReader";
import useToolbar from "../../hooks/UseToolbar";

const CustomerTableWidget: React.FC = () => {
  const { state: customerState, dispatch: customerDispatch } = useCustomerContext();

  useDataTableUrlReader();
  useToolbar(EnumToolbar.customerTable);
  useCustomerListRepository();

  const handleOnPageChangeEvent = (pageNo: number) => {
    customerDispatch(new CommandPageNumberSet(pageNo));
  };

  return (
    <div>
      <table>
        <CustomerTableHeader />
        <tbody>
          {customerState.customerList.data.map((customer) => (
            <CustomerRowWidget key={customer.id} customer={customer} />
          ))}
        </tbody>
      </table>
      <PaginationWidget page={customerState.pagination.pageNo} pageCount={customerState.customerList.totalPages} onPageChanged={handleOnPageChangeEvent} />
    </div>
  );
};

export default CustomerTableWidget;

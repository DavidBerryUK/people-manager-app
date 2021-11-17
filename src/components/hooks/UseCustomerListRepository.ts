import { useMemo } from "react";
import { useCustomerContext } from "../../contexts/customerContext/CustomerContext";
import ApiRepositoryCustomerList from "../../apiRepository/customer/ApiRepositoryCustomerList";
import CommandCustomerListSet from "../../contexts/customerContext/actions/CommandCustomerListSet";
import RepositoryCustomerListParams from "../../apiRepository/customer/models/RepositoryCustomerListParams";
import useDataTableUrlWriter from "./UseDataTableUrlWriter";

//
// get customer list data that represents the parameters
// held in the customerContext
//
function useCustomerListRepository() {

    const { state: customerState, dispatch: customerDispatch } = useCustomerContext();
    const { writeUrlHistory } = useDataTableUrlWriter();

    useMemo(async () => {
        var params = new RepositoryCustomerListParams(customerState.pagination.sortColumn, customerState.pagination.sortDirection, customerState.pagination.pageNo, customerState.pagination.rowsPerPage);
        if (params.isNotEqualTo(customerState.previousCustomerListParameters)) {
            const apiRepositoryCustomerList = new ApiRepositoryCustomerList();
            const customerList = await apiRepositoryCustomerList.getCustomersAsync(params);
            customerDispatch(new CommandCustomerListSet(customerList, params));
            writeUrlHistory();
        }
    }, [customerDispatch, customerState.pagination, customerState.previousCustomerListParameters, writeUrlHistory]);

}

export default useCustomerListRepository;
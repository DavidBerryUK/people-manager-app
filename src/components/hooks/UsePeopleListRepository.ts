import { useMemo } from "react";
import { usePeopleContext } from "../../contexts/peopleContext/PeopleContext";
import ApiRepositoryPeopleList from "../../apiRepository/people/ApiRepositoryPeopleList";
import CommandPeopleListSet from "../../contexts/peopleContext/actions/CommandPeopleListSet";
import RepositoryPeopleListParams from "../../apiRepository/people/models/RepositoryPeopleListParams";
import useDataTableUrlWriter from "./UseDataTableUrlWriter";

//
// get people list data that represents the parameters
// held in the peopleContext
//
function usePeopleListRepository() {

    const { state: peopleState, dispatch: peopleDispatch } = usePeopleContext();
    const { writeUrlHistory } = useDataTableUrlWriter();

    useMemo(async () => {
        var params = new RepositoryPeopleListParams(peopleState.pagination.sortColumn, peopleState.pagination.sortDirection, peopleState.pagination.pageNo, peopleState.pagination.rowsPerPage);
        if (params.isNotEqualTo(peopleState.previousPeopleListParameters)) {
            const apiRepositoryPeopleList = new ApiRepositoryPeopleList();
            const peopleList = await apiRepositoryPeopleList.getPeopleAsync(params);
            peopleDispatch(new CommandPeopleListSet(peopleList, params));
            writeUrlHistory();
        }
    }, [peopleDispatch, peopleState.pagination, peopleState.previousPeopleListParameters, writeUrlHistory]);

}

export default usePeopleListRepository;
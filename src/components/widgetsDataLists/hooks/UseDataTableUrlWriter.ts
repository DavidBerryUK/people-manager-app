import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import { usePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import HistoryUrlBuilder from "../../../services/urlManagers/HistoryUrlBuilder";

//
// updates the url with parameters to reflect the current state
//
function useDataTableUrlWriter() {

    const history = useHistory();
    const location = useLocation();
    const { state: peopleState } = usePeopleContext();
    const { state: listDetailContext } = UseListDetailContext();

    useEffect(() => {
        const newHistory = HistoryUrlBuilder.buildNewPageNoUrl(location.pathname, peopleState.pagination, listDetailContext.detailView, peopleState.pagination.pageNumber);
        history.push(newHistory);
    }, [history, location.pathname, peopleState.pagination, listDetailContext.detailView]);
}

export default useDataTableUrlWriter
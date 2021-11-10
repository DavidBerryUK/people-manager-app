import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { usePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import CommandRestoreFromUrl from "../../../contexts/peopleContext/actions/CommandRestoreFromUrl";
import UrlManagerService from "../../../services/urlManagers/UrlManagerService";

// either user entered url or back/forward button was pressed
// decoded required variables from the url paramters
// about to update the page state to display the correct data
function useDataTableUrlReader() {

    const history = useHistory();
    const location = useLocation();
    const { dispatch: peopleDispatch } = usePeopleContext();

    useEffect(() => {
        if (history.action === "POP") {
            var urlStateModel = UrlManagerService.getStateFromParam(location.search);
            peopleDispatch(new CommandRestoreFromUrl(urlStateModel));

            // toDo, restore detail state
            //
        }
    }, [peopleDispatch, location.search, history.action]);

}


export default useDataTableUrlReader;
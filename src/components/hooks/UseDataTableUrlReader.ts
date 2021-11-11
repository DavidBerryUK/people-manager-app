import { EnumListType } from "../../constants/enums/EnumListType";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { UseListDetailContext } from "../../contexts/ListDetailContext.tsx/ListDetailContext";
import { usePeopleContext } from "../../contexts/peopleContext/PeopleContext";
import { useRoleContext } from "../../contexts/roleContext/RoleContext";
import { useSkillContext } from "../../contexts/skillContext/SkillContext";
import { useTeamContext } from "../../contexts/teamContext/TeamContext";
import CommandRestoreDetailFromUrl from "../../contexts/ListDetailContext.tsx/actions/CommandRestoreDetailFromUrl";
import CommandRestorePeopleFromUrl from "../../contexts/peopleContext/actions/CommandRestorePeopleFromUrl";
import CommandRestoreRolesFromUrl from "../../contexts/roleContext/actions/CommandRestoreRolesFromUrl";
import CommandRestoreSkillsFromUrl from "../../contexts/skillContext/actions/CommandRestoreSkillsFromUrl";
import CommandRestoreTeamFromUrl from "../../contexts/teamContext/actions/CommandRestoreTeamFromUrl";
import UrlManagerService from "../../services/urlManagers/UrlManagerService";


// when user enteres a url or presses back/forward buttons
// this hook will decode the variables from the url paramters
// and update the page state to display the correct data to force
// correct page reload
function useDataTableUrlReader(listType: EnumListType) {

    const history = useHistory();
    const location = useLocation();
    const { dispatch: peopleDispatch } = usePeopleContext();
    const { dispatch: teamDispatch } = useTeamContext();
    const { dispatch: skillDispatch } = useSkillContext();
    const { dispatch: roleDispatch } = useRoleContext();
    const { dispatch: detailDispatch } = UseListDetailContext();

    useEffect(() => {
        if (history.action === "POP") {

            console.log("useDataTableUrlReader: Restoring state from URL");

            var urlStateModel = UrlManagerService.getStateFromParam(location.search);

            if (listType === EnumListType.people) {
                console.log("               useDataTableUrlReader:restoring people");
                peopleDispatch(new CommandRestorePeopleFromUrl(urlStateModel));
            }

            if (listType === EnumListType.teams) {
                console.log("               useDataTableUrlReader:restoring teams");
                teamDispatch(new CommandRestoreTeamFromUrl(urlStateModel));
            }

            if (listType === EnumListType.skills) {
                console.log("               useDataTableUrlReader:restoring skills");
                skillDispatch(new CommandRestoreSkillsFromUrl(urlStateModel));
            }

            if (listType === EnumListType.roles) {
                console.log("               useDataTableUrlReader:restoring roles");
                roleDispatch(new CommandRestoreRolesFromUrl(urlStateModel));
            }

            detailDispatch(new CommandRestoreDetailFromUrl(urlStateModel));
        }
    }, [listType, location.search, history.action, peopleDispatch, teamDispatch, skillDispatch, roleDispatch, detailDispatch]);

}


export default useDataTableUrlReader;
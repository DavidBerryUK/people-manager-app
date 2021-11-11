import { EnumListType } from "../../constants/enums/EnumListType";
import { EnumSortColumn } from "../../constants/enums/EnumSortColumn";
import { useHistory, useLocation } from "react-router";
import { UseListDetailContext } from "../../contexts/ListDetailContext.tsx/ListDetailContext";
import { usePeopleContext } from "../../contexts/peopleContext/PeopleContext";
import { useRoleContext } from "../../contexts/roleContext/RoleContext";
import { useSkillContext } from "../../contexts/skillContext/SkillContext";
import { useTeamContext } from "../../contexts/teamContext/TeamContext";
import HistoryUrlBuilder from "../../services/urlManagers/HistoryUrlBuilder";
import PaginationStateModel from "../../contextsCommonModels/PaginationStateModel";


//
// updates the url with parameters to reflect the current state
//
function useDataTableUrlWriter(listType: EnumListType) {

    const history = useHistory();
    const location = useLocation();
    const { state: listDetailState } = UseListDetailContext();
    const { state: peopleState } = usePeopleContext();
    const { state: teamState } = useTeamContext();
    const { state: roleState } = useRoleContext();
    const { state: skillState } = useSkillContext();

    function writeUrlHistory() {
        console.log(`writeHistory   ${history.action}`);

        if (history.action === "POP") {
            console.log("         DO NOT WRITE NEW HISTORY AS THIS WAS A POP");
            return;
        }

        var pagination = new PaginationStateModel(EnumSortColumn.None);

        if (listType === EnumListType.people) {
            pagination = peopleState.pagination;
        }
        if (listType === EnumListType.teams) {
            pagination = teamState.pagination;
        }
        if (listType === EnumListType.roles) {
            pagination = roleState.pagination;
        }
        if (listType === EnumListType.skills) {
            pagination = skillState.pagination;
        }



        const newHistory = HistoryUrlBuilder.buildUrl(location.pathname, pagination, listDetailState.detailView);
        history.push(newHistory);
    }


    return { writeUrlHistory }


}

export default useDataTableUrlWriter
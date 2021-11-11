import { EnumListType } from "../../constants/EnumListType";
import { EnumSortColumn } from "../../constants/EnumSortColumn";
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

    // console.log("People State");
    // console.log(peopleState);

    // console.log("Team State");
    // console.log(teamState);

    // console.log("Skill State");
    // console.log(skillState);

    // console.log("Role State");
    // console.log(roleState);


    function writeUrlHistory() {
        console.log("writeHistory");

        var pagination = new PaginationStateModel(EnumSortColumn.None);

        if (listType === EnumListType.people) {
            console.log("               useDataTableUrlWriter: people");
            pagination = peopleState.pagination;
        }
        if (listType === EnumListType.teams) {
            console.log("               useDataTableUrlWriter: teams");
            pagination = teamState.pagination;
        }
        if (listType === EnumListType.roles) {
            console.log("               useDataTableUrlWriter: roles");
            pagination = roleState.pagination;
        }
        if (listType === EnumListType.skills) {
            console.log("               useDataTableUrlWriter: skills");
            pagination = skillState.pagination;
        }

        const newHistory = HistoryUrlBuilder.buildUrl(location.pathname, pagination, listDetailState.detailView);
        history.push(newHistory);
    }


    return { writeUrlHistory }


}

export default useDataTableUrlWriter
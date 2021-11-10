import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { EnumListType } from "../../constants/EnumListType";
import { EnumSortColumn } from "../../constants/EnumSortColumn";
import { UseListDetailContext } from "../../contexts/ListDetailContext.tsx/ListDetailContext";
import { usePeopleContext } from "../../contexts/peopleContext/PeopleContext";
// import { useRoleContext } from "../../contexts/roleContext/RoleContext";
// import { useSkillContext } from "../../contexts/skillContext/SkillContext";
// import { useTeamContext } from "../../contexts/teamContext/TeamContext";
import PaginationStateModel from "../../contextsCommonModels/PaginationStateModel";
import HistoryUrlBuilder from "../../services/urlManagers/HistoryUrlBuilder";


//
// updates the url with parameters to reflect the current state
//
function useDataTableUrlWriter(listType: EnumListType) {

    const history = useHistory();
    const location = useLocation();
    const { state: listDetailState } = UseListDetailContext();
    const { state: peopleState } = usePeopleContext();
    // const { state: teamState } = useTeamContext();
    // const { state: rolesState } = useRoleContext();
    // const { state: skillsState } = useSkillContext();


    useEffect(() => {

        console.log("useDataTableUrlWriter: Creating URL");
        console.log(`               page          :${peopleState.pagination.pageNumber}`);
        console.log(`               rows per page :${peopleState.pagination.rowsPerPage}`);
        console.log(`               sort column   :${peopleState.pagination.sortColumn}`);
        console.log(`               sort direction:${peopleState.pagination.sortDirection}`);
        console.log(`               sort direction:${listDetailState.detailView}`);
        console.log(`               sort direction:${peopleState.pagination.sortDirection}`);


        var pagination = new PaginationStateModel(EnumSortColumn.None);

        if (listType === EnumListType.people) {
            console.log("               useDataTableUrlWriter: people");
            pagination = peopleState.pagination;
        }
        // if (listType === EnumListType.teams) {
        //     console.log("               useDataTableUrlWriter: teams");
        //     pagination = teamState.pagination;
        // }
        // if (listType === EnumListType.roles) {
        //     console.log("               useDataTableUrlWriter: roles");
        //     pagination = rolesState.pagination;
        // }
        // if (listType === EnumListType.skills) {
        //     console.log("               useDataTableUrlWriter: skills");
        //     pagination = skillsState.pagination;
        // }

        const newHistory = HistoryUrlBuilder.buildUrl(location.pathname, pagination, listDetailState.detailView);
        history.push(newHistory);

        // }, [listType, history, location.pathname, peopleState?.pagination, teamState?.pagination, rolesState?.pagination, skillsState?.pagination, listDetailState.detailView]);
    }, [listType, history, location.pathname, peopleState.pagination, listDetailState.detailView]);
}

export default useDataTableUrlWriter
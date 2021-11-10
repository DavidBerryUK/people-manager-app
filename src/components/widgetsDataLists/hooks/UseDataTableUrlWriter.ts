import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { EnumListType } from "../../../constants/EnumListType";
import { EnumSortColumn } from "../../../constants/EnumSortColumn";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import { usePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import { useRoleContext } from "../../../contexts/roleContext/RoleContext";
import { useSkillContext } from "../../../contexts/skillContext/SkillContext";
import { useTeamContext } from "../../../contexts/teamContext/TeamContext";
import PaginationStateModel from "../../../contextsCommonModels/PaginationStateModel";
import HistoryUrlBuilder from "../../../services/urlManagers/HistoryUrlBuilder";

//
// updates the url with parameters to reflect the current state
//
function useDataTableUrlWriter(listType: EnumListType) {

    const history = useHistory();
    const location = useLocation();
    const { state: listDetailContext } = UseListDetailContext();
    const { state: peopleState } = usePeopleContext();
    const { state: teamState } = useTeamContext();
    const { state: rolesState } = useRoleContext();
    const { state: skillsState } = useSkillContext();


    useEffect(() => {
        var pagination = new PaginationStateModel(EnumSortColumn.None);

        if (listType === EnumListType.people) {
            pagination = peopleState.pagination;
        }
        if (listType === EnumListType.teams) {
            pagination = teamState.pagination;
        }
        if (listType === EnumListType.roles) {
            pagination = rolesState.pagination;
        }
        if (listType === EnumListType.skills) {
            pagination = skillsState.pagination;
        }

        const newHistory = HistoryUrlBuilder.buildUrl(location.pathname, pagination, listDetailContext.detailView);
        history.push(newHistory);

    }, [listType, history, location.pathname, peopleState?.pagination, teamState?.pagination, rolesState?.pagination, skillsState?.pagination, listDetailContext.detailView]);
}

export default useDataTableUrlWriter
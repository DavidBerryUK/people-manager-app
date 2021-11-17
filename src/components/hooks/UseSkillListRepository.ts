import { useMemo } from "react";
import { useSkillContext } from "../../contexts/skillContext/SkillContext";
import ApiRepositorySkillList from "../../apiRepository/skills/ApiRepositorySkillList";
import CommandSkillListSet from "../../contexts/skillContext/actions/CommandSkillListSet";
import RepositorySkillListParams from "../../apiRepository/skills/models/RepositorySkillListParams";
import useDataTableUrlWriter from "./UseDataTableUrlWriter";

//
// get skill list data that represents the parameters
// held in the skillContext
//
function useSkillListRepository() {

    const { state: skillState, dispatch: skillDispatch } = useSkillContext();
    const { writeUrlHistory } = useDataTableUrlWriter();

    useMemo(async () => {
        var params = new RepositorySkillListParams(skillState.pagination.sortColumn, skillState.pagination.sortDirection, skillState.pagination.pageNo, skillState.pagination.rowsPerPage);
        if (params.isNotEqualTo(skillState.previousSkillListParameters)) {
            const apiRepositorySkillList = new ApiRepositorySkillList();
            const skillList = await apiRepositorySkillList.getSkillsAsync(params);
            skillDispatch(new CommandSkillListSet(skillList, params));
            writeUrlHistory();
        }
    }, [skillDispatch, skillState.pagination, skillState.previousSkillListParameters, writeUrlHistory]);

}

export default useSkillListRepository;
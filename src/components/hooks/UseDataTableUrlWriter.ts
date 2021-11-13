import { EnumSortColumn } from "../../constants/enums/EnumSortColumn";
import { useHistory, useLocation } from "react-router";
import { UseListDetailContext } from "../../contexts/ListDetailContext.tsx/ListDetailContext";
import { usePeopleContext } from "../../contexts/peopleContext/PeopleContext";
import { useRoleContext } from "../../contexts/roleContext/RoleContext";
import { useSkillContext } from "../../contexts/skillContext/SkillContext";
import { useTeamContext } from "../../contexts/teamContext/TeamContext";
import HistoryUrlBuilder from "../../services/urlManagers/HistoryUrlBuilder";
import PaginationApiModel from "../../apiRepository/models/PaginationApiModel";

//
// updates the url with parameters to reflect the current state
//
function useDataTableUrlWriter() {
  const history = useHistory();
  const location = useLocation();
  const { state: listDetailState } = UseListDetailContext();
  const { state: peopleState } = usePeopleContext();
  const { state: teamState } = useTeamContext();
  const { state: roleState } = useRoleContext();
  const { state: skillState } = useSkillContext();

  function writeUrlHistory() {
    console.log(`******* function writeUrlHistory():${history.action} `);

    // if (history.action === "POP") {
    //     // do not write a new history as this was a
    //     // back / forward button press
    //     return;
    // }

    var pagination = new PaginationApiModel(EnumSortColumn.None);

    if (peopleState) {
      pagination = peopleState.pagination;
    }

    if (teamState) {
      pagination = teamState.pagination;
    }
    if (roleState) {
      pagination = roleState.pagination;
    }
    if (skillState) {
      pagination = skillState.pagination;
    }

    const newHistory = HistoryUrlBuilder.buildUrl(location.pathname, pagination, listDetailState.detailView);

    console.log("######################################## WRITE HISTORY #########################");
    console.log(`Current: ${history.location.pathname}      ${history.location.search}`);
    console.log(`New    : ${newHistory.pathname}            ${newHistory.search}`);

    if (history.location.pathname === newHistory.pathname && history.location.search === newHistory.search) {
      // location and params same, user may have pressed back button
      return;
    }

    if (history.location.pathname === newHistory.pathname) {
      if (history.location.search === "" && newHistory.search !== "") {
        //
        // if web was landed on with no parameters, the page may well generate
        // default params, so we need to overwrite the blanks history with the
        // enriched one
        history.replace(newHistory);
        return;
      }
    }

    history.push(newHistory);
  }

  return { writeUrlHistory };
}

export default useDataTableUrlWriter;

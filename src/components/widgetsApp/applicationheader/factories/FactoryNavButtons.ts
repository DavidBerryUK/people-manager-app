import { EnumTopLevelRoutes } from "../../../../services/routes/TopLevelRouteConstants";
import NavButtonModel from "../models/NavButtonModel";

export default class FactoryNavButtons {
  //
  // get list of navigation buttons to render, could
  // be potentially be complex in a real system
  //
  static get(): Array<NavButtonModel> {
    var buttons = new Array<NavButtonModel>();

    buttons.push(new NavButtonModel(EnumTopLevelRoutes.HomePage, "Home"));
    buttons.push(new NavButtonModel(EnumTopLevelRoutes.PeopleListPage, "People"));
    buttons.push(new NavButtonModel(EnumTopLevelRoutes.TeamListPage, "Teams"));
    buttons.push(new NavButtonModel(EnumTopLevelRoutes.SkillListPage, "Skills"));

    return buttons;
  }
}

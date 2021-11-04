import { EnumTopLevelRoutes } from "../../../../services/routes/TopLevelRouteConstants";

export default class NavButtonModel {
  route: EnumTopLevelRoutes;
  title: string;

  constructor(route: EnumTopLevelRoutes, title: string) {
    this.route = route;
    this.title = title;
  }
}

//
// Restore page settings with values from the url parameters 
//
import UrlParamStateModel from "../../../services/urlManagers/models/UrlParamStateModel";
import { IListDetailDispatchCommand } from "../interfaces/IListDetailContextDispatchCommand";
import { ListDetailContextProps } from "../ListDetailContext";
import DetailViewStateModel from "../models/DetailViewStateModel";


//
export default class CommandRestoreDetailFromUrl implements IListDetailDispatchCommand {

  urlParamState: UrlParamStateModel;


  // Create the command with all data needed to update
  //  the state
  constructor(urlParamState: UrlParamStateModel) {
    this.urlParamState = urlParamState;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ListDetailContextProps): ListDetailContextProps {

    const newDetailView = new DetailViewStateModel();
    newDetailView.viewType = this.urlParamState.detailViewType;
    newDetailView.detailKey = this.urlParamState.detailKey;

    return {
      ...state,
      detailView: newDetailView
    };
  }
}

import { EnumToolbar } from "../../constants/enums/EnumToolbar";
import { useEffect } from "react";
import { UseListDetailContext } from "../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowToolbar from "../../contexts/ListDetailContext.tsx/actions/CommandShowToolbar";

//
// updates the url with parameters to reflect the current state
//
function useToolbar(toolbar: EnumToolbar) {

  const { dispatch: listDetailDispatch } = UseListDetailContext();

  useEffect(() => {
    listDetailDispatch(new CommandShowToolbar(toolbar));
  }, [listDetailDispatch, toolbar])
}

export default useToolbar;

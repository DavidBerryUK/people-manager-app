import { useLocation } from "react-router";
import React, { useMemo } from "react";
//import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
//import ListDetailUrlManager from "../../../services/urlManagers/ListDetailUrlManger";
import "./Styles.scss";

const LayoutList: React.FC = (props) => {
  const location = useLocation();
  //  const { state } = UseListDetailContext();

  // detect when brower location has changed
  //
  useMemo(() => {
    console.log("****************** LayoutList Component ******************");
    console.log("location has changed to ");
    console.log(location);
  }, [location]);

  // detect when navigation state in context has changed
  //
  // useMemo(() => {
  //   console.log("****************** LayoutList Component ******************");
  //   console.log("list state changed");
  //   const params = ListDetailUrlManager.createUrlParams(null, state.detailView.viewType, state.detailView.detailKey);
  //   console.log(params);
  // }, [state]);

  return <div className="layout-list">{props.children}</div>;
};

export default LayoutList;

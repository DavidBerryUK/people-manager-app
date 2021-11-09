import React, { useMemo } from "react";
import { useLocation } from "react-router";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import "./Styles.scss";

const LayoutList: React.FC = (props) => {
  const location = useLocation();
  const { state } = UseListDetailContext();

  // detect when brower location has changed
  //
  useMemo(() => {
    console.log("location has changed to ");
    console.log(location);
  }, [location]);

  // detect when navigation state in context has changed
  //
  useMemo(() => {
    console.log("list state changed");
    console.log(state);
  }, [state]);

  return <div className="layout-list">{props.children}</div>;
};

export default LayoutList;

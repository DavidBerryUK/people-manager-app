import React from "react";
import SubListRoutes from "../../../services/routes/SubListRoute";
import LayoutList from "../../widgetLayout/listLayout/LayoutList";
import LayoutListRegionDetail from "../../widgetLayout/listLayout/LayoutListRegionDetail";
import LayoutListRegionList from "../../widgetLayout/listLayout/LayoutListRegionList";

const ListPage: React.FC = (props) => {
  return (
    <LayoutList>
      <LayoutListRegionList>
        <SubListRoutes />
      </LayoutListRegionList>
      <LayoutListRegionDetail>detail</LayoutListRegionDetail>
    </LayoutList>
  );
};

export default ListPage;

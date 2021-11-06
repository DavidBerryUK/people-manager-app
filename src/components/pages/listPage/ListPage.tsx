import { ListDetailContextProvider } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import DetailHostWidget from "../../widgetsApp/detailHost/DetailHostWidget";
import LayoutList from "../../widgetLayout/listLayout/LayoutList";
import LayoutListRegionDetail from "../../widgetLayout/listLayout/LayoutListRegionDetail";
import LayoutListRegionList from "../../widgetLayout/listLayout/LayoutListRegionList";
import React from "react";
import SubListRoutes from "../../../services/routes/SubListRoute";

const ListPage: React.FC = (props) => {
  return (
    <ListDetailContextProvider>
      <LayoutList>
        <LayoutListRegionList>
          <SubListRoutes />
        </LayoutListRegionList>
        <LayoutListRegionDetail>
          <DetailHostWidget />
        </LayoutListRegionDetail>
      </LayoutList>
    </ListDetailContextProvider>
  );
};

export default ListPage;

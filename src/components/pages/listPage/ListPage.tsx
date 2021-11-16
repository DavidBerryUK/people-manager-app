import { ListDetailContextProvider } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import { PeopleContextProvider } from "../../../contexts/peopleContext/PeopleContext";
import { ProjectContextProvider } from "../../../contexts/projectContext/ProjectContext";
import { RoleContextProvider } from "../../../contexts/roleContext/RoleContext";
import { SkillContextProvider } from "../../../contexts/skillContext/SkillContext";
import DetailHostWidget from "../../widgetDetail/detailHost/DetailHostWidget";
import LayoutList from "../../widgetLayout/listLayout/LayoutList";
import LayoutListRegionDetail from "../../widgetLayout/listLayout/LayoutListRegionDetail";
import LayoutListRegionList from "../../widgetLayout/listLayout/LayoutListRegionList";
import LayoutListRegionListDetailContainer from "../../widgetLayout/listLayout/LayoutListRegionListDetailContainer";
import LayoutListRegionToolbar from "../../widgetLayout/listLayout/LayoutListRegionToolbar";
import ListTableToolbarHost from "../../widgetToolbars/hostToolbar/ListTableToolbarHost";
import React from "react";
import SubListRoutes from "../../../services/routes/SubListRoute";

const ListPage: React.FC = (props) => {
  return (
    <ListDetailContextProvider>
      <PeopleContextProvider>
        <ProjectContextProvider>
          <RoleContextProvider>
            <SkillContextProvider>
              <LayoutList>
                <LayoutListRegionToolbar>
                  <ListTableToolbarHost/>
                </LayoutListRegionToolbar>
                <LayoutListRegionListDetailContainer>
                  <LayoutListRegionList>
                    {/* routed page goes here */}
                    <SubListRoutes />
                  </LayoutListRegionList>
                  <LayoutListRegionDetail>
                    <DetailHostWidget />
                  </LayoutListRegionDetail>
                </LayoutListRegionListDetailContainer>
              </LayoutList>
            </SkillContextProvider>
          </RoleContextProvider>
        </ProjectContextProvider>
      </PeopleContextProvider>
    </ListDetailContextProvider>
  );
};

export default ListPage;

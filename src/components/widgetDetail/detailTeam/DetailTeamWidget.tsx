import { EnumIconSize } from "../../../constants/enums/EnumIconSize";
import { EnumPanelJustify } from "../../../constants/enums/EnumPanelJustify";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import ApiRepositoryTeam from "../../../apiRepository/teams/ApiRepositoryTeam";
import ImageTeam from "../../widgetsUI/imageTeam/ImageRole";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import PeopleTags from "../../widgetsDataLists/peopleTags/PeopleTags";
import React, { useMemo, useState } from "react";
import TeamApiModel from "../../../apiRepository/models/TeamApiModel";
import TextSubHeader from "../../widgetTypography/textSubHeader/TextSubHeader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const DetailTeamWidget: React.FC = () => {
  const { state } = UseListDetailContext();
  const [team, setTeam] = useState(new TeamApiModel());

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();

  useMemo(async () => {
    if (state.detailView.teamId !== team.id) {
      console.log("######################################## DETAIL: GET TEAM #########################");
      const apiRepositoryTeam = new ApiRepositoryTeam();
      const teamData = await apiRepositoryTeam.getTeamAsync(state.detailView.teamId!);
      setTeam(teamData);
      writeUrlHistory();
    }
  }, [state.detailView.teamId, team.id, writeUrlHistory]);

  return (
    <Panel border>
      <PanelHeader>{team.name}</PanelHeader>
      <PanelBody>
        <Panel justify={EnumPanelJustify.center}>
          <ImageTeam size={EnumIconSize.large} fileName={team.iconName} />
        </Panel>
        <TextSubHeader>{team.name}</TextSubHeader>
        <TextSubHeader>People</TextSubHeader>
        <PeopleTags people={team.people} />
      </PanelBody>
    </Panel>
  );
};

export default DetailTeamWidget;

import { EnumIconSize } from "../../../constants/EnumIconSize";
import { EnumPanelJustify } from "../../../constants/EnumPanelJustify";
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

const DetailTeamWidget: React.FC = () => {
  const { state } = UseListDetailContext();
  const [team, setTeam] = useState(new TeamApiModel());

  useMemo(async () => {
    const apiRepositoryTeam = new ApiRepositoryTeam();
    const team = await apiRepositoryTeam.getTeamAsync(state.detailView.teamId!);
    setTeam(team);
  }, [state.detailView.teamId]);

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

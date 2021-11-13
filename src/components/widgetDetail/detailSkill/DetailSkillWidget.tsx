import { EnumIconSize } from "../../../constants/enums/EnumIconSize";
import { EnumPanelJustify } from "../../../constants/enums/EnumPanelJustify";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import ApiRepositorySkill from "../../../apiRepository/skills/ApiRepositorySkill";
import ImageSkill from "../../widgetsUI/imageSkill/ImageSkill";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import PeopleSkillTags from "../../widgetsDataLists/peopleTags/PeopleSkillTags";
import React, { useMemo, useState } from "react";
import SkillApiModel from "../../../apiRepository/models/SkillApiModel";
import TextSubHeader from "../../widgetTypography/textSubHeader/TextSubHeader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const DetailSkillWidget: React.FC = () => {
  const { state } = UseListDetailContext();
  const [skill, setSkill] = useState(new SkillApiModel());

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();

  useMemo(async () => {
    if (state.detailView.skillId !== skill.id) {
      console.log("######################################## DETAIL: GET SKILL #########################");
      const apiRepositoryPeople = new ApiRepositorySkill();
      const skillData = await apiRepositoryPeople.getSkillAsync(state.detailView.skillId!);
      setSkill(skillData);
      writeUrlHistory();
    }
  }, [skill.id, state.detailView.skillId, writeUrlHistory]);

  return (
    <Panel border>
      <PanelHeader>{skill.name}</PanelHeader>
      <PanelBody>
        <Panel justify={EnumPanelJustify.center}>
          <ImageSkill size={EnumIconSize.large} fileName={skill.iconName} />
        </Panel>
        <TextSubHeader>{skill.name}</TextSubHeader>
        <TextSubHeader>People</TextSubHeader>
        <PeopleSkillTags peopleSkills={skill.people} />
      </PanelBody>
    </Panel>
  );
};

export default DetailSkillWidget;

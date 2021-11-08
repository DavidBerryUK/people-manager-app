import { EnumIconSize } from "../../../constants/EnumIconSize";
import { EnumPanelJustify } from "../../../constants/EnumPanelJustify";
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

const DetailSkillWidget: React.FC = () => {
  const { state } = UseListDetailContext();
  const [skill, setSkill] = useState(new SkillApiModel());

  useMemo(async () => {
    const apiRepositoryPeople = new ApiRepositorySkill();
    const skill = await apiRepositoryPeople.getSkillAsync(state.skillId!);
    setSkill(skill);
  }, [state.skillId]);

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

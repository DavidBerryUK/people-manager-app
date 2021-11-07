import { EnumAvatarSize } from "../../../constants/EnumAvatarSize";
import { EnumPanelJustify } from "../../../constants/EnumPanelJustify";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import ApiRepositoryPeople from "../../../apiRepository/people/ApiRepositoryPeople";
import Avatar from "../../widgetsUI/avatar/Avatar";
import Form from "../../widgetTypography/form/Form";
import FormColumnContainer from "../../widgetTypography/formColumnContainer/FormColumnContainer";
import FormFieldGroup from "../../widgetTypography/formFieldGroup/FormFieldGroup";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";
import React, { useMemo, useState } from "react";
import SkillTags from "../../widgetsDataLists/skillTags/SkillTags";
import TeamTags from "../../widgetsDataLists/teamTags/TeamTags";
import TextBody from "../../widgetTypography/textBody/TextBody";
import TextLabel from "../../widgetTypography/textLabel/TextLabel";
import TextSubHeader from "../../widgetTypography/textSubHeader/TextSubHeader";

const DetailPersonWidget: React.FC = () => {
  const { state } = UseListDetailContext();
  const [person, setPerson] = useState(new PersonApiModel());

  useMemo(async () => {
    const apiRepositoryPeople = new ApiRepositoryPeople();
    const person = await apiRepositoryPeople.getPersonAsync(state.personId!);
    setPerson(person);
  }, [state.personId]);

  return (
    <Panel border>
      <PanelHeader>{person.fullName}</PanelHeader>
      <PanelBody>
        <Panel justify={EnumPanelJustify.center}>
          <Avatar size={EnumAvatarSize.large} url={person.avatarLargeUrl} />
        </Panel>
        <TextSubHeader>{person.role.name}</TextSubHeader>
        <Form>
          <FormColumnContainer>
            <FormFieldGroup>
              <TextLabel>forename</TextLabel>
              <TextBody>{person.forename}</TextBody>
            </FormFieldGroup>
            <FormFieldGroup>
              <TextLabel>surname</TextLabel>
              <TextBody>{person.surname}</TextBody>
            </FormFieldGroup>
            <FormFieldGroup>
              <TextLabel>email address</TextLabel>
              <TextBody>{person.email}</TextBody>
            </FormFieldGroup>
          </FormColumnContainer>
        </Form>
        <TextSubHeader>Teams</TextSubHeader>
        <TeamTags teams={person.teams} />
        <TextSubHeader>Skills</TextSubHeader>
        <SkillTags skills={person.skills} />
      </PanelBody>
    </Panel>
  );
};

export default DetailPersonWidget;

import { EnumIconSize } from "../../../constants/enums/EnumIconSize";
import { EnumPanelJustify } from "../../../constants/enums/EnumPanelJustify";
import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import ApiRepositoryPeople from "../../../apiRepository/people/ApiRepositoryPeople";
import Form from "../../widgetTypography/form/Form";
import FormColumnContainer from "../../widgetTypography/formColumnContainer/FormColumnContainer";
import FormFieldGroup from "../../widgetTypography/formFieldGroup/FormFieldGroup";
import ImageAvatar from "../../widgetsUI/imageAvatar/ImageAvatar";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";
import React, { useMemo, useState } from "react";
import RoleTag from "../../widgetTags/roleTag/RoleTag";
import SkillTags from "../../widgetTags/skillTags/SkillTags";
import TeamTags from "../../widgetTags/teamTags/TeamTags";
import TextBody from "../../widgetTypography/textBody/TextBody";
import TextLabel from "../../widgetTypography/textLabel/TextLabel";
import TextSubHeader from "../../widgetTypography/textSubHeader/TextSubHeader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const DetailPersonWidget: React.FC = () => {
  const { state } = UseListDetailContext();
  const [person, setPerson] = useState(new PersonApiModel());

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();

  useMemo(async () => {
    if (state.detailView.personId !== person.id) {
      console.log("######################################## DETAIL: GET PERSON #########################");
      const apiRepositoryPeople = new ApiRepositoryPeople();
      const personData = await apiRepositoryPeople.getPersonAsync(state.detailView.personId!);
      setPerson(personData);
      writeUrlHistory();
    }
  }, [person.id, state.detailView.personId, writeUrlHistory]);

  return (
    <Panel border>
      <PanelHeader>{person.fullName}</PanelHeader>
      <PanelBody>
        <Panel justify={EnumPanelJustify.center}>
          <ImageAvatar size={EnumIconSize.large} fileName={person.iconName} />
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
        <TextSubHeader>Role</TextSubHeader>
        <RoleTag role={person.role} />
        <TextSubHeader>Teams</TextSubHeader>
        <TeamTags teams={person.teams} />
        <TextSubHeader>Skills</TextSubHeader>
        <SkillTags skills={person.skills} />
      </PanelBody>
    </Panel>
  );
};

export default DetailPersonWidget;

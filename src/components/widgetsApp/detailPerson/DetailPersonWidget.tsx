import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import ApiRepositoryPeople from "../../../apiRepository/people/ApiRepositoryPeople";
import Form from "../../widgetTypography/form/Form";
import FormLine from "../../widgetTypography/formLine/FormLine";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";
import React, { useMemo, useState } from "react";
import TextBody from "../../widgetTypography/textBody/TextBody";
import TextLabel from "../../widgetTypography/textLabel/TextLabel";

const DetailPersonWidget: React.FC = () => {
  const { state } = UseListDetailContext();
  const [person, setPerson] = useState(new PersonApiModel());

  useMemo(async () => {
    const apiRepositoryPeople = new ApiRepositoryPeople();
    const person = await apiRepositoryPeople.getPersonAsync(state.personId!);
    setPerson(person);
  }, [state.personId]);

  return (
    <Panel>
      <PanelHeader>
        {person.forename} {person.surname}
      </PanelHeader>
      <PanelBody>
        <Form>
          <FormLine>
            <TextLabel>forename</TextLabel>
            <TextBody>{person.forename}</TextBody>
          </FormLine>
          <FormLine>
            <TextLabel>surname</TextLabel>
            <TextBody>{person.surname}</TextBody>
          </FormLine>
          <FormLine>
            <TextLabel>email address</TextLabel>
            <TextBody>{person.email}</TextBody>
          </FormLine>
        </Form>
      </PanelBody>
    </Panel>
  );
};

export default DetailPersonWidget;

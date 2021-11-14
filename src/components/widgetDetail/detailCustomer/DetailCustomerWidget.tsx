import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import ApiRepositoryCustomer from "../../../apiRepository/customer/ApiRepositoryCustomer";
import CustomerApiModel from "../../../apiRepository/models/CustomerApiModel";
import Panel from "../../widgetsUI/panel/Panel";
import PanelBody from "../../widgetsUI/panel/PanelBody";
import PanelHeader from "../../widgetsUI/panel/PanelHeader";
import ProjectTags from "../../widgetTags/projectTags/ProjectTags";
import React, { useMemo, useState } from "react";
import TextSubHeader from "../../widgetTypography/textSubHeader/TextSubHeader";
import useDataTableUrlWriter from "../../hooks/UseDataTableUrlWriter";

const DetailCustomerWidget: React.FC = () => {
  const { state } = UseListDetailContext();
  const [customer, setCustomer] = useState(new CustomerApiModel());

  // URL Managers
  const { writeUrlHistory } = useDataTableUrlWriter();

  useMemo(async () => {
    if (state.detailView.customerId !== customer.id) {
      console.log("######################################## DETAIL: GET Customer #########################");
      const apiRepositoryCustomer = new ApiRepositoryCustomer();
      const customerData = await apiRepositoryCustomer.getCustomerAsync(state.detailView.customerId!);
      setCustomer(customerData);
      writeUrlHistory();
    }
  }, [customer.id, state.detailView.customerId, writeUrlHistory]);

  return (
    <Panel border>
      <PanelHeader>{customer.name}</PanelHeader>
      <PanelBody>
        <TextSubHeader>{customer.name}</TextSubHeader>
        <TextSubHeader>Projects</TextSubHeader>
        <ProjectTags projects={customer.projects} />
      </PanelBody>
    </Panel>
  );
};

export default DetailCustomerWidget;

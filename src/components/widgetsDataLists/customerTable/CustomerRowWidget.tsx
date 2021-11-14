import React from "react";
import CustomerApiModel from "../../../apiRepository/models/CustomerApiModel";

interface IProperties {
  customer: CustomerApiModel;
}

const CustomerRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.customer.name}</td>
    </tr>
  );
};

export default CustomerRowWidget;

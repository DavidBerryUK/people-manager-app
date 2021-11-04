import React from "react";

const PeopleListHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th>Forename</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Teams</th>
        <th>Skills</th>
      </tr>
    </thead>
  );
};

export default PeopleListHeader;

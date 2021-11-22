const ProjectHealthSummary: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>timescales</th>
          <th>scope</th>
          <th>quality</th>
          <th>relationship</th>
          <th>resources</th>
          <th>budget</th>
        </tr>
      </thead>
      <tbody>
        <td>50%</td>
        <td>50%</td>
        <td>50%</td>
        <td>50%</td>
        <td>50%</td>
        <td>50%</td>
      </tbody>
    </table>
  );
};

export default ProjectHealthSummary;

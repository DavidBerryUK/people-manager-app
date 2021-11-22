import ProjectHealthGauge from "./ProjectHealthGauge";
import "./Styles.scss";

const ProjectHealthSummary: React.FC = () => {
  return (
    <div className="health-summary">
      <div>
        <div className="title">timescales</div>
        <ProjectHealthGauge className="gauge" width={180} height={180} percent={20} />
      </div>
      <div>
        <div className="title">scope</div>
        <ProjectHealthGauge className="gauge" width={180} height={180} percent={40} />
      </div>
      <div>
        <div className="title">quality</div>
        <ProjectHealthGauge className="gauge" width={180} height={180} percent={50} />
      </div>
      <div>
        <div className="title">relationship</div>
        <ProjectHealthGauge className="gauge" width={180} height={180} percent={60} />
      </div>
      <div>
        <div className="title">resources</div>
        <ProjectHealthGauge className="gauge" width={180} height={180} percent={70} />
      </div>
      <div>
        <div className="title">budget</div>
        <ProjectHealthGauge className="gauge" width={180} height={180} percent={90} />
      </div>
    </div>
  );
};

export default ProjectHealthSummary;

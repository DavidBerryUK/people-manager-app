import React, { useEffect, useRef } from "react";
import ProjectApiModel from "../../../apiRepository/entities/ProjectApiModel";
import ProjectStagesChartBuilder from "../../../charts/highlevel/ProjectStagesChartBuilder";

interface IProperties {
  project: ProjectApiModel;
}

const ProjectStagesChart: React.FC<IProperties> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const chartBuilder = new ProjectStagesChartBuilder();
    chartBuilder.build(props.project, canvasRef.current);
  }, [props.project]);

  return (
    <>
      <canvas ref={canvasRef} width="530" height="300" />
    </>
  );
};

export default ProjectStagesChart;

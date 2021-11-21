import GanttChartModel from "../../../charts/gantt/models/GanttChartModel";
import ProjectStagesChartBuilder from "../../../charts/highlevel/ProjectStagesChartBuilder";
import React, { useEffect, useRef } from "react";

interface IProperties {
  chartData: GanttChartModel;
}

const GanttChart: React.FC<IProperties> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const chartBuilder = new ProjectStagesChartBuilder();
    chartBuilder.build(props.chartData, canvasRef.current);
  }, [props.chartData]);

  return (
    <>
      <canvas ref={canvasRef} width="530" height="300" />
    </>
  );
};

export default GanttChart;

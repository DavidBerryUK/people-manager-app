import { useEffect, useRef } from "react";
import GaugeRenderer from "./GaugeRenderer";

interface IProperties {
  width: number;
  height: number;
  percent: number;
  className?: string | undefined;
}

const ProjectHealthGauge: React.FC<IProperties> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const renderer = new GaugeRenderer();
    renderer.build(canvasRef.current, props.percent);
  }, [props.width, props.height, props.percent]);

  return <canvas className={props.className} ref={canvasRef} width={props.width} height={props.height} />;
};

export default ProjectHealthGauge;

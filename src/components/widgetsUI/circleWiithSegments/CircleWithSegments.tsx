import { useEffect, useRef } from "react";
import CircleWithSegmentsRenderer from "./CircleWithSegmentsRenderer";

interface IProperties {
  width: number;
  height: number;
  className?: string | undefined;
}

const CircleWithSegments: React.FC<IProperties> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const renderer = new CircleWithSegmentsRenderer();
    renderer.render(canvasRef.current);
  }, [props.width, props.height]);

  return <canvas className={props.className} ref={canvasRef} width={props.width} height={props.height} />;
};

export default CircleWithSegments;

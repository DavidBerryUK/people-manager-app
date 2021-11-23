import { useEffect, useRef } from "react";
import PaletteTestRenderer from "./PaletteTestRenderer";

interface IProperties {
  width: number;
  height: number;
  className?: string | undefined;
}

const PaletteTestWidget: React.FC<IProperties> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const renderer = new PaletteTestRenderer();
    renderer.render(canvasRef.current);
  }, [props.width, props.height]);

  return <canvas className={props.className} ref={canvasRef} width={props.width} height={props.height} />;
};

export default PaletteTestWidget;

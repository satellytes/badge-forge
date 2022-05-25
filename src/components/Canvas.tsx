import { useContext } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";

export const Canvas = () => {
  const { canvasRef } = useContext(BadgeForgeContext);

  return <canvas ref={canvasRef} width={300} height={300}></canvas>;
};

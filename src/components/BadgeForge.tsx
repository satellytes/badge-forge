import { useContext, useEffect, useMemo } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { drawDonut } from "../lib/canvas/drawDonut";
import { drawImage } from "../lib/canvas/drawImage";
import { drawTextAlongArc } from "../lib/canvas/drawTextAlongArc";
import { Canvas } from "./Canvas";
import { ImageSelector } from "./ImageSelector";
import { RenderButton } from "./RenderButton";
import { TextLabel } from "./TextLabel";
import { AngleSelector } from "./AngleSelector";
import { DonutColorSelector, LabelColorSelector } from "./ColorSelector";
import placeholder from "../static/images/placeholder.svg";

const useDrawBadge = () => {
  const {
    canvasRef,
    canvasHeight,
    canvasWidth,
    selectedFile,
    label,
    angle,
    labelColor,
    donutColor,
    innerRadius,
  } = useContext(BadgeForgeContext);

  const image = new Image();
  image.src = selectedFile ? URL.createObjectURL(selectedFile) : placeholder;
  const redrawImage = useMemo(() => drawImage, [image]);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    function drawAll() {
      if (context) {
        context.clearRect(0, 0, canvasHeight, canvasWidth);
        redrawImage(context, image, 0, 0);
        drawDonut(context, canvasHeight, innerRadius, angle - 0.5, donutColor); // Offset angle by -0.5 since text starts at `angle`
        drawTextAlongArc(
          context,
          label,
          canvasWidth,
          -(canvasWidth / 2 - 50),
          angle,
          labelColor
        );
      } else {
        console.log({ context });
      }
    }
    requestAnimationFrame(drawAll);

    /**
     * Draw Image
     */
    image.addEventListener("load", drawAll);
  }, [
    canvasHeight,
    canvasWidth,
    selectedFile,
    label,
    innerRadius,
    donutColor,
    angle,
    labelColor,
  ]);
};

export const BadgeForge = () => {
  useDrawBadge();

  return (
    <>
      <ImageSelector />
      <TextLabel />
      <AngleSelector />
      <LabelColorSelector />
      <DonutColorSelector />
      <Canvas />
      <RenderButton />
    </>
  );
};

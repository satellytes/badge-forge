import { useContext, useEffect } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { drawImage } from "../lib/canvas/drawImage";
import { drawTextAlongArc } from "../lib/canvas/drawTextAlongArc";
import { Canvas } from "./Canvas";
import { ImageSelector } from "./ImageSelector";
import { RenderButton } from "./RenderButton";
import { TextLabel } from "./TextLabel";

const useDrawBadge = () => {
  const { canvasRef, canvasHeight, canvasWidth, selectedFile, label } =
    useContext(BadgeForgeContext);

  const context = canvasRef.current?.getContext("2d");

  useEffect(() => {
    /**
     * Clear Canvas
     */
    if (context) {
      context.clearRect(0, 0, canvasHeight, canvasWidth);
    }

    /**
     * Draw Image
     */
    if (context) {
      const image = new Image();
      image.src = selectedFile
        ? URL.createObjectURL(selectedFile)
        : "https://picsum.photos/id/1027/512/512";

      image.addEventListener("load", () => {
        drawImage(context, image, 0, 0);
        drawTextAlongArc(context, label, 150, 150, -130, -0.45);
      });
    }
  }, [context, canvasHeight, canvasWidth, selectedFile, label]);
};

export const BadgeForge = () => {
  useDrawBadge();

  return (
    <>
      <ImageSelector />
      <TextLabel />
      <Canvas />
      <RenderButton />
    </>
  );
};

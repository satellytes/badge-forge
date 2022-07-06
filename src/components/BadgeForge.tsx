import { useContext, useEffect, useMemo } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { drawDonut } from "../lib/canvas/drawDonut";
import { drawImage } from "../lib/canvas/drawImage";
import { drawLabel } from "../lib/canvas/drawLabel";
import placeholder from "../static/images/placeholder.svg";
import { Canvas } from "./Canvas";
import { ColorSwatches } from "./ColorSelector";
import {
  ExportWrapper,
  ParamWrapper,
  SubTitleWrapper,
  TitleWrapper,
  Wizard,
  WizardWrapper,
} from "./Containers";
import { HoverArea } from "./HoverArea";
import { ImageSelector, Instructions } from "./ImageSelector";
import { RangeSelectors } from "./RangeSelectors";
import { RenderButton } from "./RenderButton";
import { TextLabel } from "./TextLabel";

export const BadgeForge = () => {
  const {
    canvasRef,
    canvasHeight,
    canvasWidth,
    selectedFile,
    label,
    angle,
    labelColor,
    donutColor,
    donutStroke,
  } = useContext(BadgeForgeContext);

  const image = useMemo(() => new Image(), []);
  image.src = selectedFile ? URL.createObjectURL(selectedFile) : placeholder;

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    function drawAll() {
      if (context) {
        context.clearRect(0, 0, canvasHeight, canvasWidth);
        drawImage(context, image, 0, 0);
        drawDonut(context, canvasHeight, donutStroke, angle - 0.5, donutColor); // Offset angle by -0.5 since text starts at `angle`
        drawLabel(
          context,
          label,
          canvasWidth,
          -(canvasWidth / 2 - 0.05 * canvasWidth),
          angle,
          labelColor
        );
      }
    }

    /**
     * Draw Image
     */
    image.addEventListener("load", drawAll);
  }, [
    canvasHeight,
    canvasWidth,
    selectedFile,
    label,
    donutStroke,
    donutColor,
    angle,
    labelColor,
    image,
    canvasRef,
  ]);

  return (
    <WizardWrapper>
      <TitleWrapper>BadgeForge</TitleWrapper>
      <SubTitleWrapper>
        Create customized profile pictures with ease.
      </SubTitleWrapper>
      <Wizard>
        <ParamWrapper>
          <TextLabel />
          <ColorSwatches />
          <RangeSelectors />
        </ParamWrapper>
        <ExportWrapper>
          <Canvas>
            <HoverArea>
              <ImageSelector />
            </HoverArea>
          </Canvas>
          <Instructions />
          <RenderButton />
        </ExportWrapper>
      </Wizard>
    </WizardWrapper>
  );
};

import { useContext, useEffect } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { drawDonut } from "../lib/canvas/drawDonut";
import { drawImage } from "../lib/canvas/drawImage";
import { drawTextAlongArc } from "../lib/canvas/drawTextAlongArc";
import { Canvas } from "./Canvas";
import { ImageSelector } from "./ImageSelector";
import { RenderButton } from "./RenderButton";
import { TextLabel } from "./TextLabel";
import { RangeSelectors } from "./RangeSelectors";
import {
  ColorSwatches,
} from "./ColorSelector";
import { HoverArea } from "./HoverArea";
import {
  ColDiv,
  ExportWrapper,
  Instructions,
  ParamWrapper,
  SubTitleWrapper,
  TitleWrapper,
  Wizard,
  WizardWrapper,
} from "./Containers";
import placeholder from "../static/images/placeholder.svg";



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
  
  const image = new Image();
  image.src = selectedFile ? URL.createObjectURL(selectedFile) : placeholder;

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    function drawAll() {
      if (context) {
        context.clearRect(0, 0, canvasHeight, canvasWidth);
        drawImage(context, image, 0, 0);
        drawDonut(context, canvasHeight, donutStroke, angle - 0.5, donutColor); // Offset angle by -0.5 since text starts at `angle`
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
      <Wizard>
        <ParamWrapper>
          <TitleWrapper>BadgeForge</TitleWrapper>
          <SubTitleWrapper>
            Create customized profile pictures with ease.
          </SubTitleWrapper>
          <TextLabel />
          <ColorSwatches />
          <RangeSelectors />
        </ParamWrapper>
        <ExportWrapper>
          <ColDiv>
            <Instructions />
            <RenderButton />
          </ColDiv>
        </ExportWrapper>
      </Wizard>
      <Canvas>
        <HoverArea>
          <ImageSelector />
        </HoverArea>
      </Canvas>
    </WizardWrapper>
  );
};

import { ReactElement, useContext } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import styled from "styled-components";

type Props = {
  children?: ReactElement;
};

export const Canvas = ({ children }: Props) => {
  const { canvasRef, canvasWidth, canvasHeight } =
    useContext(BadgeForgeContext);
  return (
    <CanvasWrapper>
      {children}
      <CircleCanvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </CanvasWrapper>
  );
};

const CanvasWrapper = styled.div`
  position: relative;
  grid-area: canvas;
  box-sizing: border-box;
  width: 235px;
  height: 235px;
`;

const CircleCanvas = styled.canvas`
  position: relative;
  border: solid 5px white;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.effects.canvasShadow};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 0;
  font-family: ${({ theme }) => theme.font.family.cocoGothic};
`;

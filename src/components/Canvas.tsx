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
      <div style={{ fontFamily: "Inter" }}> </div>
      {/** used to pre-load the font before drawing*/}
      <CircleCanvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </CanvasWrapper>
  );
};

const CanvasWrapper = styled.div`
position: absolute;
left: 155px;
top: -320px;
`

const CircleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  border: solid 5px white;
  border-radius: 50%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  z-index: 0;
  font-family: Inter, sans-serif;
`;

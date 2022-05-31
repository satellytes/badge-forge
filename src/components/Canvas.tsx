import { ReactElement, useContext } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import styled from "styled-components";

interface Props {
  className?: string;
  children?: ReactElement;
  canvasWidth: number;
  canvasHeight: number;
}

const UCanvas: React.FC<Props> = ({
  className,
  children,
  canvasWidth,
  canvasHeight,
}) => {
  const { canvasRef } = useContext(BadgeForgeContext);
  return (
    <>
      <div style={{fontFamily: "Inter"}}> </div>
      <canvas
        className={className}
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
      >
        <img alt="" src="https://picsum.photos/id/1027/512/512" />
      </canvas>
    </>
  );
};

export const Canvas = styled(UCanvas)`
  border: solid 5px white;
  border-radius: 50%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  transform: scale(0.5);
`;

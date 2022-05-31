import { ReactElement, useContext } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import styled from "styled-components";
import placeholder from "../static/images/placeholder.svg";


export const Canvas = () => {
  const { canvasRef, canvasWidth, canvasHeight } =
    useContext(BadgeForgeContext);
  return (
    <>
      <div style={{ fontFamily: "Inter" }}> </div> {/** used to pre-load the font before drawing*/ }   
       <CircularCanvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
        />
    </>
  );
};

// const Placeholder = styled.img`
// border: solid 5px white;
//   border-radius: 50%;
//   box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
//   box-sizing: border-box;
//   width: 200px;
//   height: 200px;
// `

const CircularCanvas = styled.canvas`
  border: solid 5px white;
  border-radius: 50%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  width: 200px;
  height: 200px;
`;

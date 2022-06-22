import { DragEvent, MouseEvent, ReactElement } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactElement;
};

function revealArea(e: DragEvent | MouseEvent) {
  e.preventDefault();
  const target = e.target as HTMLDivElement;
  const child = target.firstChild as HTMLLabelElement;
  console.log(child);
  if (child) child.style.display = "block";
}

export const HoverArea = ({ children }: Props) => {
  return (
    <HoverDiv aria-label="hoverable"
      onMouseOver={revealArea}
      onDragEnter={revealArea}
      onDragOver={revealArea}
    >
      {children}
    </HoverDiv>
  );
};

const HoverDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  z-index: 1;
`;

import { DragEvent, ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactElement;
};

export const HoverArea = ({ children }: Props) => {
  function revealArea(e: DragEvent) {
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    const child = target.firstChild as HTMLLabelElement;
    if (child) child.style.display = "block";
  }
  function concealArea(e: DragEvent) {
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    const child = target.firstChild as HTMLLabelElement;
    if (child) child.style.display = "none";
  }
  return <HoverDiv onDragEnter={revealArea} onDragOver={revealArea}>{children}</HoverDiv>;
};

const HoverDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  z-index: 1;
  &:hover > * {
    display: block;
  }
`;

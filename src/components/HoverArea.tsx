import { DragEvent, MouseEvent, ReactElement, useState } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactElement;
};

export const HoverArea = ({ children }: Props) => {
  const [isVisible, setVisible] = useState(false);

  const toggleArea =
    (isVisible: boolean) =>
    (e: DragEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setVisible(isVisible);
    };

  return (
    <HoverDiv
      aria-label="hoverable"
      onMouseOver={toggleArea(true)}
      onDragEnter={toggleArea(true)}
      onDragOver={toggleArea(true)}
      onMouseOut={toggleArea(false)}
      onDragLeave={toggleArea(false)}
    >
      {isVisible && children}
    </HoverDiv>
  );
};

const HoverDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

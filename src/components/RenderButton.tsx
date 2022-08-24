import { useContext } from "react";
import styled from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { ReactComponent as Download } from "../static/images/icons/Download.svg";
import { ButtonIcon } from "./Containers";
import * as Panelbear from "@panelbear/panelbear-js";

export const RenderButton = () => {
  const { canvasRef } = useContext(BadgeForgeContext);

  const handleClick = () => {
    if (canvasRef.current) {
      const anchor = document.createElement("a");
      anchor.href = canvasRef.current.toDataURL("image/png");
      anchor.download = `profile-${new Date()
        .toISOString()
        .substring(0, 10)}.png`;
      anchor.click();
      Panelbear.track("Download");
    }
  };

  return (
    <Button onClick={handleClick} title="Download as PNG file">
      <span>Save image</span>
      <ButtonIcon>
        <Download />
      </ButtonIcon>
    </Button>
  );
};

const Button = styled.button`
  grid-area: button;
  background: linear-gradient(275.41deg, #543fd7 0%, #2756fd 100%);
  font-size: ${({ theme }) => theme.font.size.h3};
  font-weight: ${({ theme }) => theme.font.weight.heavy};
  height: 40px;
  width: 146px;
  box-sizing: border-box;
  border-radius: 30px;
  border: none;
  transition: ${({ theme }) => theme.effects.growTransition};
  cursor: pointer;
  & span {
    vertical-align: middle;
    display: inline-block;
    padding-left: ${({ theme }) => theme.spacing.xxxs};
    color: ${({ theme }) => theme.colors.gray50};
  }
  &:hover {
    transform: scale(1.05);
    opacity: 0.95;
  }
  &:active {
    opacity: 0.85;
  }
`;

import { useContext } from "react";
import styled from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { FiDownload } from "react-icons/fi";
import { ButtonIcon } from "./Containers";

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
    }
  };

  return (
    <Button onClick={handleClick} title="Download as PNG file">
      <ButtonIcon>
        <FiDownload />
      </ButtonIcon>
      <span>SAVE IMAGE</span>
    </Button>
  );
};

const Button = styled.button`
  color: ${({ theme }) => theme.colors.gray50};
  font-size: 17px;
  font-weight: 500;
  height: calc(var(--param-height) * 1.5);
  width: 200px;
  box-sizing: border-box;
  border-radius: var(--param-border-radius);
  background-color: ${({ theme }) => theme.colors.gray700};
  border: solid 2px ${({ theme }) => theme.colors.gray800};
  box-shadow: var(--param-shadow);
  transition: var(--param-grow);
  cursor: pointer;
  & > * {
    vertical-align: middle;
    display: inline-block;
  }
  &:hover {
    transform: scale(1.05);
    opacity: 0.95;
  }
  &:active {
    opacity: 0.85;
  }
`;

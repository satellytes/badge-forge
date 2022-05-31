import { useContext } from "react";
import styled from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";

export const RenderButton = () => {
  const { canvasRef } = useContext(BadgeForgeContext);

  const handleClick = () => {
    if (canvasRef.current) {
      const anchor = document.createElement("a");
      anchor.href = canvasRef.current.toDataURL("image/png");
      anchor.download = `badge-${new Date().toISOString()}.png`;
      anchor.click();
    }
  };

  return <button onClick={handleClick}>Download Image</button>;
};



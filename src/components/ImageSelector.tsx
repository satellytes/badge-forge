import { ChangeEvent, useContext, DragEvent, MouseEvent } from "react";
import styled from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { light } from "../static/styles/colors";
import { FiUpload } from "react-icons/fi";

export const ImageSelector = () => {
  const { selectedFile, setSelectedFile } = useContext(BadgeForgeContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  function revealArea(e: DragEvent | MouseEvent) {
    e.preventDefault();
    const target = e.target as HTMLLabelElement;
    target.style.display = "block";
  }

  function concealArea(e: DragEvent| MouseEvent) {
    e.preventDefault();
    const target = e.target as HTMLLabelElement;
    target.style.display = "none";
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setSelectedFile(e.dataTransfer.files[0]);
    concealArea(e);
  }

  return (
    <CircleUpload onMouseOver={revealArea} onMouseOut={concealArea} onDragLeave={concealArea} onDrop={handleDrop}>
      <div>
        <FiUpload
          style={{
            fill: "none",
            width: 50,
            height: 50,
            stroke: light.iconStroke,
          }}
        />
      </div>
      {selectedFile ? "CHANGE" : "UPLOAD"} <br /> IMAGE
      <input
        type="file"
        accept="image/*;capture=camera"
        onChange={handleChange}
      />
    </CircleUpload>
  );
};

const CircleUpload = styled.label`
  display: none;
  border: solid 5px white;
  border-radius: 50%;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  background-color: ${light.uploadColor};
  cursor: pointer;
  font-weight: 600;
  color: ${light.text};
  padding-top: 46px;
  transition: border 0.2s ease-in-out;
  z-index: 2;
  div {
    display: block;
  }
  input {
    display: none;
  }
  &:hover {
    border: solid 9px white;
  }
`;

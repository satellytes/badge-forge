import { ChangeEvent, useContext, DragEvent, MouseEvent } from "react";
import styled from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { dark, light } from "../static/styles/colors";
import { FiUpload } from "react-icons/fi";

export const ImageSelector = () => {
  const { selectedFile, setSelectedFile } = useContext(BadgeForgeContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  function concealArea(e: DragEvent | MouseEvent) {
    e.preventDefault();
    const target = e.target as HTMLLabelElement;
    console.log(target);
    target.style.display = "none";
    // target.style.visibility = "hidden";
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setSelectedFile(e.dataTransfer.files[0]);
    concealArea(e);
  }

  return (
    <CircleUpload
      title="upload an image file"
      onMouseOut={concealArea}
      onDragLeave={concealArea}
      onDrop={handleDrop}
    >
      <div>
        <FiUpload
          style={{
            fill: "none",
            width: 45,
            height: 45,
            stroke: dark.text,
          }}
        />
      </div>
      <div>
        {selectedFile ? "CHANGE" : "UPLOAD"} <br /> IMAGE
      </div>
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
  // visibility: hidden;
  border: solid 5px white;
  border-radius: 50%;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  //background-color: ${light.uploadColor};
  backdrop-filter: blur(25px) brightness(0.7);
  //opacity: 0.95;
  cursor: pointer;
  font-weight: 600;
  font-size: 17px;
  color: ${light.buttonLabel};
  padding-top: 45px;
  transition: border 0.2s ease-in-out;
  z-index: 2;
  & * {
    pointer-events: none;
    //filter: var(--button-drop);
  }
  & input {
    display: none;
  }
  &:hover {
    border: solid 10px white;
  }
`;

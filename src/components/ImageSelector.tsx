import { ChangeEvent, useContext, DragEvent } from "react";
import styled from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { light, dark } from "../static/styles/colors";
import {Upload} from "../static/images/vectorIcons";
import { FiUpload } from "react-icons/fi";


export const ImageSelector = () => {
  const { setSelectedFile } = useContext(BadgeForgeContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  function concealArea(e: DragEvent) {
    e.preventDefault();
    const target = e.target as HTMLLabelElement;
    target.style.display = "none";
  }

  return (
    <CircleUpload onDragLeave={concealArea}>
      <div><FiUpload style={{fill: "none", width: 50, height: 50, stroke: light.iconStroke}}/></div>
      UPLOAD <br/> IMAGE
      <input
        type="file"
        accept="image/*;capture=camera"
        onChange={handleChange}
      />
    </CircleUpload>
  );
};

const CircleUpload = styled.label`
  border: solid 5px white;
  border-radius: 50%;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  background-color: ${light.uploadColor};
  display: none;
  cursor: pointer;
  font-weight: 600;
  color: ${light.text};
  padding-top: 46px;
  transition: border 0.2s ease-in-out;
  z-index: 2;
  input {
    display: none;
  }
  &:hover {
    border: solid 9px white;
  }
`;

import { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";

export const ImageSelector = () => {
  const { setSelectedFile } = useContext(BadgeForgeContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // if (event.target.files && event.target.files.length > 0) {
    //   const img = new Image();
    //   img.src = URL.createObjectURL(event.target.files[0]);
    // }
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <CircleUpload
      type="file"
      accept="image/*;capture=camera"
      onChange={handleChange}
    />
  );
};

const CircleUpload = styled.input`
  /* border: solid 5px white;
  border-radius: 50%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  width: 200px;
  height: 200px; */
`

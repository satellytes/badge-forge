import { ChangeEvent, useContext, DragEvent, MouseEvent } from "react";
import styled from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { ReactComponent as UploadIcon } from "../static/images/icons/Upload.svg";
import { ButtonIcon } from "./Containers";

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
    target.style.display = "none";
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
      {selectedFile ? "Change" : "Upload"} image
      <ButtonIcon>
        <UploadIcon />
      </ButtonIcon>
      <input
        type="file"
        accept="image/*;capture=camera"
        onChange={handleChange}
        aria-label="imageupload"
      />
    </CircleUpload>
  );
};

export const Instructions = () => {
  const { setSelectedFile } = useContext(BadgeForgeContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  return (
    <InstructionDiv>
      <p>
        Drop picture above or{" "}
        <label>
          browse
          <input
            type="file"
            accept="image/*;capture=camera"
            onChange={handleChange}
            aria-label="imageupload"
            style={{ display: "none" }}
          />
        </label>
      </p>
    </InstructionDiv>
  );
};

const InstructionDiv = styled.div`
  grid-area: instructions;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  font-size: ${({ theme }) => theme.spacing.s};
  & label {
    color: ${({ theme }) => theme.colors.purple400};
    cursor: pointer;
  }
`;

const CircleUpload = styled.label`
  display: none;
  border: solid 5px white;
  border-radius: 50%;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  // Firefox fallback for blurred backdrop
  background-color: ${({ theme }) => theme.colors.purple400};

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: transparent;
    backdrop-filter: blur(25px) brightness(0.7);
  }
  cursor: pointer;
  font-weight: 700;
  font-size: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.colors.gray50};
  transition: border 0.2s ease-in-out;
  z-index: 2;
  & * {
    color: ${({ theme }) => theme.colors.gray50};
    pointer-events: none;
  }
  & input {
    display: none;
  }
  &:hover {
    border: solid 12px white;
  }
`;

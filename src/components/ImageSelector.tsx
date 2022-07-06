import {
  ChangeEvent,
  DragEvent,
  MouseEvent,
  useContext,
  useState,
} from "react";
import styled from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { ReactComponent as UploadIcon } from "../static/images/icons/Upload.svg";
import { ButtonIcon } from "./Containers";

export const ImageSelector = () => {
  const [isVisible, setVisible] = useState(false);
  const { selectedFile, setSelectedFile } = useContext(BadgeForgeContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setSelectedFile(e.dataTransfer.files[0]);
  }

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
      <CircleUpload
        title="upload an image file"
        onDrop={handleDrop}
        $isVisible={isVisible}
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

interface CircleUploadProps {
  $isVisible: boolean;
}

const CircleUpload = styled.label<CircleUploadProps>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
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
  font-weight: ${({ theme }) => theme.font.weight.heavy};
  font-size: ${({ theme }) => theme.font.size.h3};
  color: ${({ theme }) => theme.colors.gray50};
  transition: border 0.2s ease-in-out;
  z-index: 2;
  & input {
    display: none;
  }
  &:hover {
    border: solid 12px white;
  }
`;

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
  font-size: ${({ theme }) => theme.font.size.h3};
  & label {
    color: ${({ theme }) => theme.colors.purple400};
    cursor: pointer;
  }
`;

import { ChangeEvent, useContext } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import styled from "styled-components";
import { RowDiv, ParamLabelWrapper, ColDiv, IconDiv } from "./Containers";
import { ReactComponent as PositionIcon } from "../static/images/icons/Rotation.svg";
import { ReactComponent as BorderIcon } from "../static/images/icons/Border.svg";

const StrokeSelector = () => {
  const { donutStroke, setDonutStroke, canvasWidth } =
    useContext(BadgeForgeContext);
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDonutStroke(parseInt(e.target.value));
  };
  return (
    <RangeInput
      type="range"
      min="0"
      max={canvasWidth / 2}
      value={donutStroke}
      step={5}
      onChange={handleValueChange}
    />
  );
};

const AngleSelector = () => {
  const { angle, setAngle } = useContext(BadgeForgeContext);
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAngle(parseInt(e.target.value) / 100);
  };
  return (
    <RangeInput
      type="range"
      min="-250"
      max="200"
      value={angle * 100}
      step={10}
      onChange={handleValueChange}
    />
  );
};

export const RangeSelectors = () => {
  return (
    <RowDiv>
      <ParamLabelWrapper>
        Adjust label position and border width:
      </ParamLabelWrapper>
      <ColDiv>
        <IconDiv>
          <PositionIcon />
        </IconDiv>
        <AngleSelector />
        <IconDiv style={{ marginLeft: 5 }}>
          <BorderIcon />
        </IconDiv>
        <StrokeSelector />
      </ColDiv>
    </RowDiv>
  );
};

const RangeInput = styled.input`
  height: ${({ theme }) => theme.dimensions.swatchHeight};
  width: 100%;
  margin: 0 5px 0 0;
  background: transparent;
  & {
    background-color: transparent;
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.colors.gray50};
    border-radius: 5px;
    height: 5px;
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    margin-top: -5.5px;
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.colors.purple400};
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
    &:hover {
      transform: scale(1.05);
      opacity: 0.95;
    }
    &:active {
      opacity: 0.85;
    }
  }

  &::-moz-range-track {
    background: ${({ theme }) => theme.colors.gray50};
    border-radius: 5px;
    height: 5px;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.colors.purple400};
    border-radius: 50%;
    cursor: pointer;
    border: none;
    &:hover {
      transform: scale(1.05);
      opacity: 0.95;
    }
    &:active {
      opacity: 0.85;
    }
  }
  &::-ms-track {
    background: transparent;
    border-color: transparent;

    color: transparent;
    height: 5px;
    cursor: pointer;
  }
  &::-ms-fill-lower {
    background: ${({ theme }) => theme.colors.gray50};
    border-radius: 2px;
  }
  &::-ms-fill-upper {
    background: ${({ theme }) => theme.colors.gray50};
    border-radius: 2px;
  }
  &::-ms-thumb {
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.colors.purple400};
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
      opacity: 0.95;
    }
    &:active {
      opacity: 0.85;
    }
  }
`;

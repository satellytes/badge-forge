import { ChangeEvent, useContext } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import styled from "styled-components";
import { ColDiv, ParamLabelWrapper, RowDiv, IconDiv } from "./Containers";
import { FiDisc, FiRefreshCw } from "react-icons/fi";
import { light } from "../static/styles/colors";

const StrokeSelector = () => {
  const { donutStroke, setDonutStroke } = useContext(BadgeForgeContext);
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDonutStroke(parseInt(e.target.value));
  };
  return (
    <RangeInput
      type="range"
      min="0"
      max="512"
      value={donutStroke}
      step={10}
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
      min="-100"
      max="100"
      value={angle * 100}
      step={10}
      onChange={handleValueChange}
    />
  );
};

export const RangeSelectors = () => {
  return (
    <ColDiv>
      <ParamLabelWrapper>
        Adjust label position and border width:
      </ParamLabelWrapper>
      <RowDiv>
        <IconDiv>
          <FiRefreshCw />
        </IconDiv>
        <AngleSelector />
        <IconDiv style={{ marginLeft: 5 }}>
          <FiDisc />
        </IconDiv>
        <StrokeSelector />
      </RowDiv>
    </ColDiv>
  );
};

const RangeInput = styled.input`
  height: var(--param-height);
  width: 140px;
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
    background: ${light.strokeColor};
    border-radius: 5px;
    height: 5px;
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    margin-top: -7.5px;
    width: 20px;
    height: 20px;
    background: ${light.wizardBg};
    border: var(--param-border);
    border-radius: 50%;
    box-shadow: var(--param-shadow);
    cursor: pointer;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    background: ${light.strokeColor};
    border-radius: 5px;
    height: 5px;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: ${light.wizardBg};
    border: var(--param-border);
    border-radius: 50%;
    box-shadow: var(--param-shadow);
    cursor: pointer;
  }
  &::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 10px 0;
    color: transparent;
    height: 5px;
    cursor: pointer;
  }
  &::-ms-fill-lower {
    background: ${light.strokeColor};
    border-radius: 2px;
  }
  &::-ms-fill-upper {
    background: ${light.strokeColor};
    border-radius: 2px;
  }
  &::-ms-thumb {
    width: 20px;
    height: 20px;
    background: ${light.wizardBg};
    border: var(--param-border);
    border-radius: 7px;
    cursor: pointer;
    margin-top: 0px;
  }
`;

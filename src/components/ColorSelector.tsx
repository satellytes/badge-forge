import { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { light } from "../static/styles/colors";
import { ColDiv, RowDiv, ParamLabelWrapper, IconDiv } from "./Containers";
import { FiCrosshair, FiType, FiTarget } from "react-icons/fi";

interface ColorSelectorProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

interface ColorSwatchProps {
  parameter: "label" | "donut";
  color: string;
  borderColor?: string;
}

interface ColorIconProps {
  parameter: "label" | "donut";
}

const ColorSelector = ({ label, value, onChange }: ColorSelectorProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <label>
      <ColorSwatchDiv title="Pick color">
        <ColorInput type="color" value={value} onChange={handleChange} />
        <FiCrosshair
          style={{ width: 20, height: 20, stroke: light.iconStroke }}
        />
      </ColorSwatchDiv>
    </label>
  );
};

export const LabelColorSelector = () => {
  const { labelColor, setLabelColor } = useContext(BadgeForgeContext);
  return (
    <ColorSelector
      value={labelColor}
      onChange={setLabelColor}
      label="Label Color"
    />
  );
};

export const DonutColorSelector = () => {
  const { donutColor, setDonutColor } = useContext(BadgeForgeContext);
  return (
    <ColorSelector
      value={donutColor}
      onChange={setDonutColor}
      label="Donut Color"
    />
  );
};

const ColorInput = styled.input`
  visibility: hidden;
  border-width: 0px;
  width: 0px;
  height: 0px;
  padding: 0px;
`;

const ColorSwatch = ({
  color,
  parameter,
  borderColor = light.swatchBd,
}: ColorSwatchProps) => {
  const { setLabelColor, setDonutColor } = useContext(BadgeForgeContext);
  return parameter === "label" ? (
    <ColorSwatchDiv
      style={{ backgroundColor: color, borderColor: borderColor }}
      onClick={() => setLabelColor(color)}
    />
  ) : (
    <ColorSwatchDiv
      style={{ backgroundColor: color, borderColor: borderColor }}
      onClick={() => setDonutColor(color)}
    />
  );
};

const ColorSwatchDiv = styled.div`
  border-radius: var(--param-border-radius);
  border: var(--param-border);
  height: var(--param-height);
  box-shadow: var(--param-shadow);
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: var(--param-grow);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    opacity: 0.95;
  }
  &:active {
    opacity: 0.85;
  }
`;

const ColorIcon = ({ parameter }: ColorIconProps) => {
  return (
    <IconDiv>
      {parameter === "label" ? (
        <FiType title="Label color" />
      ) : (
        <FiTarget title="Border color" />
      )}
    </IconDiv>
  );
};

export const ColorSwatches = () => {
  return (
    <>
      <ColDiv>
        <ParamLabelWrapper>
          Pick your label and border colors:
        </ParamLabelWrapper>
        <RowDiv>
          <ColorIcon parameter="label" />
          <ColorSwatch
            color={light.labelWHITE}
            borderColor={light.labelBorderWHITE}
            parameter="label"
          />
          <ColorSwatch color={light.labelBLACK} parameter="label" />
          <ColorSwatch color={light.labelRED} parameter="label" />
          <LabelColorSelector />
        </RowDiv>
        <RowDiv>
          <ColorIcon parameter="donut" />
          <ColorSwatch color={light.donutVIOLET} parameter="donut" />
          <ColorSwatch color={light.donutGREEN} parameter="donut" />
          <ColorSwatch color={light.donutBLUE} parameter="donut" />
          <DonutColorSelector />
        </RowDiv>
      </ColDiv>
    </>
  );
};

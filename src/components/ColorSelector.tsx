import { ChangeEvent, useContext } from "react";
import styled, { useTheme } from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
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

const ColorSelector = ({ value, onChange }: ColorSelectorProps) => {
  const { colors } = useTheme();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <label>
      <ColorSwatchDiv title="Pick color">
        <ColorInput
          type="color"
          value={value}
          onChange={handleChange}
          aria-label="colorpicker"
        />
        <FiCrosshair
          style={{ width: 20, height: 20, stroke: colors.gray500 }}
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

const ColorSwatch = ({ color, parameter, borderColor }: ColorSwatchProps) => {
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
  const { colors } = useTheme();

  return (
    <>
      <ColDiv>
        <ParamLabelWrapper>
          Pick your label and border colors:
        </ParamLabelWrapper>
        <RowDiv>
          <ColorIcon parameter="label" />
          <ColorSwatch
            color={colors.gray50}
            borderColor={colors.gray100}
            parameter="label"
          />
          <ColorSwatch
            color={colors.gray900}
            borderColor={colors.gray400}
            parameter="label"
          />
          <ColorSwatch
            color={colors.red700}
            borderColor={colors.red400}
            parameter="label"
          />
          <LabelColorSelector />
        </RowDiv>
        <RowDiv>
          <ColorIcon parameter="donut" />
          <ColorSwatch
            color={colors.purple700}
            borderColor={colors.purple400}
            parameter="donut"
          />
          <ColorSwatch
            color={colors.green700}
            borderColor={colors.green400}
            parameter="donut"
          />
          <ColorSwatch
            color={colors.blue700}
            borderColor={colors.blue400}
            parameter="donut"
          />
          <DonutColorSelector />
        </RowDiv>
      </ColDiv>
    </>
  );
};

import { ChangeEvent, useContext } from "react";
import styled, { useTheme } from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { RowDiv, ColDiv, ParamLabelWrapper, IconDiv } from "./Containers";
import { ReactComponent as LabelColorIcon } from "../static/images/icons/Label.svg";
import { ReactComponent as DonutColorIcon } from "../static/images/icons/Donut.svg";

interface ColorSelectorProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

interface ColorSwatchProps {
  parameter: "label" | "donut";
  color: string;
}

interface ColorIconProps {
  parameter: "label" | "donut";
}

const ColorSelector = ({ value, onChange }: ColorSelectorProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <label>
      <ColorPickerDiv title="Pick color">
        <ColorInput
          type="color"
          value={value}
          onChange={handleChange}
          aria-label="colorpicker"
        />
      </ColorPickerDiv>
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
  opacity: 0;
  height: ${({ theme }) => theme.dimensions.swatchHeight};
  width: ${({ theme }) => theme.dimensions.swatchWidth};
  padding: 0px;
`;

const ColorSwatch = ({ color, parameter }: ColorSwatchProps) => {
  const { colors } = useTheme();
  const { setLabelColor, labelColor, setDonutColor, donutColor } =
    useContext(BadgeForgeContext);
  return parameter === "label" ? (
    <ColorSwatchDiv
      style={{
        backgroundColor: color,
        borderColor: labelColor === color ? colors.grayTrans : color,
      }}
      onClick={() => setLabelColor(color)}
    />
  ) : (
    <ColorSwatchDiv
      style={{
        backgroundColor: color,
        borderColor: donutColor === color ? colors.grayTrans : color,
      }}
      onClick={() => setDonutColor(color)}
    />
  );
};

const ColorSwatchDiv = styled.div`
  height: ${({ theme }) => theme.dimensions.swatchHeight};
  width: ${({ theme }) => theme.dimensions.swatchWidth};
  box-sizing: border-box;
  border: 3px solid;
  transition: ${({ theme }) => theme.effects.growTransition};
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    opacity: 0.95;
  }
  &:active {
    opacity: 0.85;
  }
`;

const ColorPickerDiv = styled.div`
  height: ${({ theme }) => theme.dimensions.swatchHeight};
  width: ${({ theme }) => theme.dimensions.swatchWidth};
  background: conic-gradient(
    from 45deg at 50% 50%,
    #fb6c6c 0deg,
    #eec73e 90deg,
    #3eeed9 187.5deg,
    #3e61ee 277.5deg,
    #ee3e73 360deg
  );
  box-sizing: border-box;
  transition: ${({ theme }) => theme.effects.growTransition};
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
      {parameter === "label" ? <LabelColorIcon /> : <DonutColorIcon />}
    </IconDiv>
  );
};

export const ColorSwatches = () => {
  const { colors } = useTheme();

  return (
    <>
      <RowDiv>
        <ParamLabelWrapper>
          Pick your label and border colors:
        </ParamLabelWrapper>
        <ColDiv>
          <ColorIcon parameter="label" />
          <ColorSwatch color={colors.gray50} parameter="label" />
          <ColorSwatch color={colors.turq400} parameter="label" />
          <ColorSwatch color={colors.purple400} parameter="label" />
          <ColorSwatch color={colors.red400} parameter="label" />
          <ColorSwatch color={colors.gray650} parameter="label" />
          <LabelColorSelector />
        </ColDiv>
        <ColDiv>
          <ColorIcon parameter="donut" />
          <ColorSwatch color={colors.gray50} parameter="donut" />
          <ColorSwatch color={colors.turq400} parameter="donut" />
          <ColorSwatch color={colors.purple400} parameter="donut" />
          <ColorSwatch color={colors.red400} parameter="donut" />
          <ColorSwatch color={colors.gray650} parameter="donut" />
          <DonutColorSelector />
        </ColDiv>
      </RowDiv>
    </>
  );
};

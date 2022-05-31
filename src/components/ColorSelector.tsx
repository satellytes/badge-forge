import { ChangeEvent, FC, useContext } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";

interface ColorSelectorProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

const ColorSelector: FC<ColorSelectorProps> = ({ label, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <label>
      {label}
      <input type="color" value={value} onChange={handleChange} />
    </label>
  );
};

export const LabelColorSelector: FC = () => {
  const { labelColor, setLabelColor } = useContext(BadgeForgeContext);
  return (
    <ColorSelector
      value={labelColor}
      onChange={setLabelColor}
      label="Label Color"
    />
  );
};

export const DonutColorSelector: FC = () => {
  const { donutColor, setDonutColor } = useContext(BadgeForgeContext);
  return (
    <ColorSelector
      value={donutColor}
      onChange={setDonutColor}
      label="Donut Color"
    />
  );
};

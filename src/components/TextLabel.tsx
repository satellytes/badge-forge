import { ChangeEvent, useContext } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";

export const TextLabel = () => {
  const { label, setLabel } = useContext(BadgeForgeContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e?.target.value);
  };

  return <input type="text" value={label} onChange={handleChange} />;
};

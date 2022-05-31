import { ChangeEvent, FC, ReactElement, useContext } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import styled from "styled-components";

interface AngleSelectorProps {}


const Label = styled.label``
const Input = styled.input``

export const AngleSelector: FC<AngleSelectorProps> = () => {
  const {angle, setAngle} = useContext(BadgeForgeContext);
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAngle(parseInt(e.target.value)/100);
  }
    return (
      <Label>
        <Input type="range" min="-100" max="100"  value={angle * 100}  onChange={handleValueChange} />
      </Label>
    )
};


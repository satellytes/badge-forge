import { ChangeEvent, useContext } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { light } from "../static/styles/colors";
import { ColDiv, RowDiv, ParamLabelWrapper, IconDiv } from "./Containers";
import { FiHash,FiAlertTriangle } from "react-icons/fi";
import styled from "styled-components";

export const TextLabel = () => {
  const { label, setLabel } = useContext(BadgeForgeContext);
  let isAlert = false;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const validLength = e?.target.value.length <= 15;
    if (validLength) {
      setLabel(e?.target.value);
    } else {
      isAlert = true;
    }
    
  };


  return (
    <ColDiv>
    <ParamLabelWrapper>Enter your label text:</ParamLabelWrapper>
      <RowDiv>
      {isAlert ? <IconDiv><FiAlertTriangle/></IconDiv>:<IconDiv><FiHash/></IconDiv>}
      <LabelInput type="text" value={label} placeholder="enter max. 15 characters" onChange={handleChange} />
      </RowDiv>
    </ColDiv>
  );
};

const LabelInput = styled.input`
  height: var(--param-height);
  padding: 8px 10px;
  box-sizing: border-box;
  font-size: 17px;
  border: var(--param-border);
  border-radius: var(--param-border-radius);
  box-shadow: var(--param-shadow);
  width: 350px;
`;

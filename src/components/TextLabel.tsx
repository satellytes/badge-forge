import { ChangeEvent, useContext } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { ColDiv, RowDiv, ParamLabelWrapper, IconDiv } from "./Containers";
import { FiHash, FiAlertTriangle } from "react-icons/fi";
import styled, { useTheme } from "styled-components";

let isAlert = false;

export const TextLabel = () => {
  const { colors } = useTheme();
  const { label, setLabel } = useContext(BadgeForgeContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const validLength = e?.target.value.length <= 15;
    if (validLength) {
      isAlert = false;
      setLabel(e?.target.value);
    }
    if (e?.target.value.length >= 15) {
      isAlert = true;
    }
  };

  return (
    <ColDiv>
      <ParamLabelWrapper>Enter your label text:</ParamLabelWrapper>
      <RowDiv>
        {isAlert ? (
          <IconDiv aria-label="Error">
            <FiAlertTriangle style={{ stroke: colors.orange700 }} />
          </IconDiv>
        ) : (
          <IconDiv>
            <FiHash />
          </IconDiv>
        )}
        <LabelInput
          type="text"
          value={label}
          placeholder="max. 15 characters"
          onChange={handleChange}
          maxLength={15}
          list="templates"
        />
        <datalist id="templates">
          <option value="#HIRING" />
          <option value="#OPEN FOR WORK" />
          <option value="#FREELANCING" />
        </datalist>
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
  &::placeholder {
    opacity: 1;
    color: ${({ theme }) => theme.colors.gray200};
  }
`;

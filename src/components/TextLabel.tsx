import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import styled from "styled-components";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { labelPresets } from "../lib/presets/labelPresets";
import { ReactComponent as CaretRoundedDown } from "../static/images/icons/caret-rounded-down.svg";
import { ParamLabelWrapper, RowDiv } from "./Containers";

interface OptionProps {
  option: string;
  onClick?: () => void;
}

const DropdownOption = ({ option, onClick }: OptionProps) => {
  return <OptionDiv onClick={onClick && onClick}>{option}</OptionDiv>;
};

export const TextLabel = () => {
  const { label, setLabel } = useContext(BadgeForgeContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const validLength = e?.target.value.length <= 15;
    if (validLength) {
      setLabel(e?.target.value);
    }
  };

  const toggleDropdown = (e: MouseEvent) => {
    e.stopPropagation();
    setDropdownOpen((isOpen) => !isOpen);
  };

  return (
    <DropdownWrapper>
      <ParamLabelWrapper>Enter your label text:</ParamLabelWrapper>
      <DropdownBox
        onClick={toggleDropdown}
        title="type your own text or select from the presets"
        $showAlert={label.length >= 15}
      >
        <LabelInput
          type="text"
          value={label}
          placeholder="15 characters max."
          onChange={handleChange}
          maxLength={15}
        />
        <ArrowDiv
          onClick={toggleDropdown}
          $direction={isDropdownOpen ? "down" : "up"}
        >
          <CaretRoundedDown />
        </ArrowDiv>
      </DropdownBox>
      <DropdownOptions onClick={toggleDropdown} $isOpen={isDropdownOpen}>
        {labelPresets.map((preset) => (
          <DropdownOption
            key={preset}
            option={preset}
            onClick={() => setLabel(preset)}
          />
        ))}
        <ModalBlocker onClick={toggleDropdown} />
      </DropdownOptions>
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled(RowDiv)`
  grid-area: label;
  grid-template-areas: "info" "input" "options";
`;

const ModalBlocker = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 98;
`;
interface DropdownOptionsProps {
  $isOpen?: boolean;
}
const DropdownOptions = styled.div<DropdownOptionsProps>`
  display: ${({ $isOpen }) => ($isOpen ? "grid" : "none")};
  position: absolute;
  overflow: scroll;
  grid-area: options;
  grid-template-rows: repeat(
    auto-fit,
    ${({ theme }) => theme.dimensions.boxHeight}
  );
  align-items: center;
  width: 100%;
  height: auto;
  max-height: 200px;
  z-index: 98;
  background-color: ${({ theme }) => theme.colors.gray50};
  margin-top: ${({ theme }) => `-${theme.spacing.xxxs}`};
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
`;

const OptionDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: ${({ theme }) => theme.dimensions.boxHeight};
  font-size: ${({ theme }) => theme.font.size.h3};
  font-weight: ${({ theme }) => theme.font.weight.heavy};
  padding-left: ${({ theme }) => theme.spacing.s};
  user-select: none;
  z-index: 100;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray60};
  }
`;

interface ArrowDivProps {
  $direction?: "down" | "up";
}
const ArrowDiv = styled.div<ArrowDivProps>`
  box-sizing: content-box;
  grid-area: arrow;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray60};
  }
  transform: ${({ $direction }) =>
    $direction === "up" ? "rotate(0deg)" : "rotate(180deg)"};
`;

interface DropdownBoxProps {
  $showAlert?: boolean;
}
const DropdownBox = styled.div<DropdownBoxProps>`
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-areas: "label arrow";
  align-items: center;
  height: ${({ theme }) => theme.dimensions.boxHeight};
  background-color: ${({ theme }) => theme.colors.gray50};
  z-index: 100;
  box-sizing: content-box;
  cursor: pointer;
  border: ${({ theme, $showAlert }) =>
    $showAlert ? theme.borders.alert : theme.borders.regular};
  &:focus-within {
    border: ${({ theme }) => theme.borders.focus};
  }
`;

const LabelInput = styled.input`
  height: ${({ theme }) => theme.dimensions.boxHeight};
  padding: ${({ theme }) => theme.spacing.s};
  font-size: ${({ theme }) => theme.font.size.h3};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  box-sizing: border-box;
  border: none;
  grid-area: label;
  width: 100%;
  margin: ${({ theme }) => `-${theme.spacing.xxxxs}`};
  background-color: transparent;
  &:focus {
    outline-width: 0;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray200};
  }
`;

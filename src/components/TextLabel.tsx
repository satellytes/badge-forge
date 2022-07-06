import { ChangeEvent, useContext, MouseEvent, useRef } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";
import { RowDiv, ParamLabelWrapper } from "./Containers";
import styled from "styled-components";
import { ReactComponent as CaretRoundedDown } from "../static/images/icons/caret-rounded-down.svg";
import { labelPresets } from "../lib/presets/labelPresets";

interface OptionProps {
  option: string;
}

export const TextLabel = () => {
  const { label, setLabel } = useContext(BadgeForgeContext);
  const optionsRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const DropdownOption = ({ option }: OptionProps) => {
    return (
      <OptionDiv
        onClick={() => {
          setLabel(option);
          (dropdownRef.current as HTMLDivElement).classList.remove("alert");
        }}
      >
        {option}
      </OptionDiv>
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const validLength = e?.target.value.length <= 15;
    if (validLength) {
      (dropdownRef.current as HTMLDivElement).classList.remove("alert");
      setLabel(e?.target.value);
    }
    if (e?.target.value.length >= 15) {
      (dropdownRef.current as HTMLDivElement).classList.add("alert");
    }
  };

  const toggleOptions = (e: MouseEvent) => {
    e.stopPropagation();
    if (optionsRef.current && arrowRef.current) {
      const options = optionsRef.current as HTMLElement;
      options.classList.toggle("open");
      const arrow = arrowRef.current as HTMLDivElement;
      arrow.classList.toggle("open");
    }
  };

  return (
    <DropdownWrapper>
      <ParamLabelWrapper>Enter your label text:</ParamLabelWrapper>
      <DropdownBox
        onClick={toggleOptions}
        ref={dropdownRef}
        title="type your own text or select from the presets"
      >
        <LabelInput
          type="text"
          value={label}
          placeholder="15 characters max."
          onChange={handleChange}
          maxLength={15}
        />
        <ArrowDiv onClick={toggleOptions} ref={arrowRef}>
          <CaretRoundedDown />
        </ArrowDiv>
      </DropdownBox>
      <DropdownOptions onClick={toggleOptions} ref={optionsRef}>
        <DropdownOption option={labelPresets.hiring} />
        <DropdownOption option={labelPresets.freelancing} />
        <DropdownOption option={labelPresets.openForWork} />
        <DropdownOption option={labelPresets.onLeave} />
        <ModalBlocker onClick={toggleOptions} />
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

const DropdownOptions = styled.div`
  display: none;
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
  &.open {
    display: grid;
  }
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

const ArrowDiv = styled.div`
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
  &.open {
    transform: rotate(180deg);
  }
`;

const DropdownBox = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-areas: "label arrow";
  align-items: center;
  height: ${({ theme }) => theme.dimensions.boxHeight};
  background-color: ${({ theme }) => theme.colors.gray50};
  z-index: 100;
  box-sizing: content-box;
  cursor: pointer;
  border: ${({ theme }) => theme.borders.regular};
  &:focus-within {
    border: ${({ theme }) => theme.borders.focus};
  }
  &.alert {
    border: ${({ theme }) => theme.borders.alert};
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

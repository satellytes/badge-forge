import { RefObject } from "react";
import styled from "styled-components";

export type WrapperProps = {
  children?: JSX.Element | JSX.Element[];
  onClick?: () => void;
  ref?: RefObject<HTMLElement>;
};

export const Wizard = ({ children }: WrapperProps) => {
  return <WizardDiv>{children}</WizardDiv>;
};

const WizardDiv = styled.div`
  position: relative;
  width: 820px;
  height: 400px;
  padding: ${({ theme }) => theme.spacing.xxl};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.gray60};
  display: grid;
  grid-template-columns: 6fr 2fr 4fr;
  grid-template-areas: "params pad export";
  grid-area: wizard;
`;
export const WizardWrapper = ({ children }: WrapperProps) => {
  return <WizardWrapperDiv>{children}</WizardWrapperDiv>;
};

const WizardWrapperDiv = styled.div`
  display: grid;
  grid-template-rows: ${({ theme }) => theme.spacing.xxl} ${({ theme }) =>
      theme.spacing.xl} ${({ theme }) => theme.spacing.xl} 45px 1fr;
  grid-template-areas:
    "header"
    "pad0"
    "subheader"
    "pad1"
    "wizard";
  grid-auto-flow: row;
  align-items: end;
`;

export const ParamWrapper = ({ children }: WrapperProps) => {
  return <ParamWrapperDiv>{children}</ParamWrapperDiv>;
};

export const IconDiv = styled.div`
  height: ${({ theme }) => theme.dimensions.swatchHeight};
  width: ${({ theme }) => theme.dimensions.swatchHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.gray50};
`;

export const ExportWrapper = styled.div`
  min-height: 0;
  display: grid;
  grid-area: export;
  grid-template-rows: 40% 20% 20% 20%;
  grid-template-areas:
    "canvas"
    "instructions"
    "pad"
    "button";
  justify-items: center;
  align-items: end;
`;

export const ButtonIcon = styled.span`
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.spacing.xxxs};
`;

const ParamWrapperDiv = styled.div`
  min-height: 0;
  display: grid;
  grid-auto-flow: row;
  grid-template-areas:
    "label"
    "colors"
    "transforms";
  grid-area: params;
  justify-items: start;
  align-content: space-between;
`;

export const ParamLabelWrapper = styled.p`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: ${({ theme }) => theme.font.weight.heavy};
  text-align: start;
  padding: 4px 0px;
  margin: 0px;
  font-size: ${({ theme }) => theme.font.size.h3};
`;

export const TitleWrapper = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray900};
  text-align: start;
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.heavy};
`;

export const SubTitleWrapper = styled.p`
  grid-area: subheader;
  color: ${({ theme }) => theme.colors.gray900};
  text-align: start;
  font-size: ${({ theme }) => theme.font.size.h2};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin: 0;
`;

export const ColDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  column-gap: ${({ theme }) => theme.spacing.xs};
`;

export const RowDiv = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-content: space-between;
  row-gap: ${({ theme }) => theme.spacing.xxs};
  width: 100%;
`;

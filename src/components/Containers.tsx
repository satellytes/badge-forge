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
  height: 400px;
  padding: ${({ theme }) => theme.spacing.xxl};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.gray60};
  display: grid;
  grid-template-areas: "params export";
  column-gap: ${({ theme }) => theme.spacing.xxxl};
  grid-area: wizard;
  @media (max-width: 832px) {
    margin-top: ${({ theme }) => theme.spacing.xxxl};
    height: 700px;
    grid-template-rows: 8fr 2fr 8fr;
    grid-template-areas:
      "export"
      "pad"
      "params";
  }
`;
export const WizardWrapper = ({ children }: WrapperProps) => {
  return <WizardWrapperDiv>{children}</WizardWrapperDiv>;
};

const WizardWrapperDiv = styled.div`
  display: grid;
  grid-template-rows:
    ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.xl}
    45px
    1fr
    ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.xxxl}
    auto
    80px;
  grid-template-areas:
    "header"
    "pad0"
    "subheader"
    "pad1"
    "wizard"
    "pad2"
    "faq-subheader"
    "faq"
    "footer";
  grid-auto-flow: row;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing.s};
  margin-right: ${({ theme }) => theme.spacing.s};
  max-width: 800px;
  @media (max-width: 832px) {
    width: 468px;
  }
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

export const TitleWrapper = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray900};
  text-align: start;
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.heavy};
`;

export const SubTitleWrapper = styled.h2`
  grid-area: subheader;
  color: ${({ theme }) => theme.colors.gray900};
  text-align: start;
  font-size: ${({ theme }) => theme.font.size.h2};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin: 0;
`;

export const H2Wrapper = styled.h2`
  color: ${({ theme }) => theme.colors.gray900};
  text-align: start;
  font-size: ${({ theme }) => theme.font.size.h2};
  font-weight: ${({ theme }) => theme.font.weight.heavy};
  margin: 0;
  padding: 20px 0;
`;

export const ColDiv = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  column-gap: ${({ theme }) => theme.spacing.xs};
`;

export const RowDiv = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: row;
  align-content: space-between;
  row-gap: ${({ theme }) => theme.spacing.xxs};
  width: 100%;
`;

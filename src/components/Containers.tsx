import { ReactElement } from "react";
import { light } from "../static/styles/colors";
import styled from "styled-components";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Wizard = ({ children }: Props) => {
  return <WizardDiv>{children}</WizardDiv>;
};

const WizardDiv = styled.div`
  --width: 800px;
  --height: 500px;
  position: absolute;
  top: calc(var(--height) / 2 * (-1));
  left: calc(var(--width) / 2 * (-1));
  width: var(--width);
  height: var(--height);
  padding: 50px 45px;
  box-sizing: border-box;
  background-color: ${light.wizardBg};
  border: solid 2px ${light.wizardBd};
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
  z-index: -1;
  // concerning children
  display: flex;
  flex-direction: row;
`;
export const WizardWrapper = ({ children }: Props) => {
  return <WizardWrapperDiv>{children}</WizardWrapperDiv>;
};

const WizardWrapperDiv = styled.div`
  position: relative;
`;

export const ParamWrapper = ({ children }: Props) => {
  return <ParamWrapperDiv>{children}</ParamWrapperDiv>;
};

export const IconDiv = styled.div`
  border-radius: var(--param-border-radius);
  border: var(--param-border);
  height: var(--param-height);
  width: var(--param-height);
  box-shadow: var(--param-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${light.iconDivFill};
  & > * {
    width: 20px;
    height: 20px;
    stroke: ${light.iconStroke};
  }
`;

const ParamWrapperDiv = styled.div`
  flex-basis: 70%;
  //concerning children
  display: flex;
  flex-direction: column;
  row-gap: 45px;
`;
export const ParamLabelWrapper = styled.p`
  color: var(--text);
  text-align: start;
  padding: 8px 0px;
  margin: 0px;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;
export const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

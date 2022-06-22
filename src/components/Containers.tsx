import styled from "styled-components";
import { ReactComponent as InstructionSource } from "../static/images/instructions.svg";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Wizard = ({ children }: Props) => {
  return <WizardDiv>{children}</WizardDiv>;
};

const WizardDiv = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  padding: 45px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.gray50};
  border: solid 2px ${({ theme }) => theme.colors.gray100};
  border-radius: 10px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.08);
  // concerning children
  display: flex;
  flex-direction: row;
`;
export const WizardWrapper = ({ children }: Props) => {
  return <WizardWrapperDiv>{children}</WizardWrapperDiv>;
};

const WizardWrapperDiv = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-top: 50px;
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
  background-color: ${({ theme }) => theme.colors.gray75};
  & > * {
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.colors.gray600};
  }
`;

export const Instructions = () => {
  return (
    <InstructionDiv>
      <InstructionSource />
    </InstructionDiv>
  );
};
const InstructionDiv = styled.div`
  padding-bottom: 50px;
  & > * {
    width: 180px;
  }
`;

export const ExportWrapper = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  -webkit-justify-content: flex-end;
  align-items: center;
  padding-left: 30px;
`;

export const ButtonIcon = styled.span`
  box-sizing: border-box;
  & > * {
    width: 25px;
    height: 25px;
    stroke: ${({ theme }) => theme.colors.gray50};
    padding-right: 10px;
  }
`;

const ParamWrapperDiv = styled.div`
  flex-basis: 70%;
  //concerning children
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const ParamLabelWrapper = styled.p`
  color: ${({ theme }) => theme.colors.gray500};
  text-align: start;
  padding: 4px 0px;
  margin: 0px;
  font-size: 15px;
`;

export const TitleWrapper = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
  text-align: start;
  font-size: 30px;
  font-weight: 700;
  margin: 0;
`;

export const SubTitleWrapper = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
  text-align: start;
  font-size: 15px;
  font-weight: 600;
  margin: -15px 0 0 0;
  padding: 0 0 10px;
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

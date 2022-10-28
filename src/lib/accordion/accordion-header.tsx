/* 
/ adapted code from https://github.com/satellytes/satellytes.com/blob/cee9f09aceacf05809c546fefacf9dbb98af37ce/src/components/ui/accordion/accordion-header.tsx
*/

import styled, { css } from "styled-components";
import * as ReachAccordion from "@reach/accordion";
import { useAccordionItemContext } from "@reach/accordion";
import React from "react";
import { resetButton } from "../../theme/css-helpers";
import { Icon } from "../icon/icon";

interface AccordionHeaderProps {
  children: React.ReactNode;
}

interface StyledIconProps {
  open: boolean;
}

const AccordionTitleHeadline = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.h3};
  padding-right: 20px;
  color: inherit;
`;

const AccordionButton = styled(ReachAccordion.AccordionButton)`
  ${resetButton};

  color: ${({ theme }) => theme.colors.purple400};

  &:hover {
    color: ${({ theme }) => theme.colors.gray900};
  }

  cursor: pointer;
  width: 100%;

  display: flex;
  align-items: center;
  padding: 0 24px;
`;

const StyledIcon = styled(Icon)<StyledIconProps>`
  // embed in a flex layout we want to push the chevron to the far right
  margin-left: auto;

  transition: transform 0.1s ease-out;
  transform: rotate(180deg);

  ${(props) =>
    props.open &&
    css`
      transform: rotate(0deg);
    `}
`;

export const AccordionHeader = (props: AccordionHeaderProps) => {
  const { isExpanded } = useAccordionItemContext();

  return (
    <AccordionButton>
      <AccordionTitleHeadline>{props.children}</AccordionTitleHeadline>
      <StyledIcon open={isExpanded} show="chevron_up" />
    </AccordionButton>
  );
};

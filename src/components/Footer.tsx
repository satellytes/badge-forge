import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSafari,
} from "@fortawesome/free-brands-svg-icons";
import { Theme } from "../theme/theme";

export const Footer = () => {
  return (
    <FooterDiv>
      <pre>Made by Satellytes · </pre>
      <SocialLink
        title="Satellytes on LinkedIn"
        href="https://www.linkedin.com/company/satellytes/"
      >
        <SocialIcon icon={faLinkedin} />
      </SocialLink>
      <SocialLink
        title="BadgeForge on GitHub"
        href="https://github.com/satellytes/badge-forge"
      >
        <SocialIcon color={Theme.colors.gray300} icon={faGithub} />
      </SocialLink>
      <SocialLink title="Satellytes Website" href="https:/satellytes.com/">
        <SocialIcon color={Theme.colors.gray300} icon={faSafari} />
      </SocialLink>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  grid-area: footer;
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${({ theme }) => theme.font.size.h3};
  font-family: ${({ theme }) => theme.font.family.cocoGothic};
`;

const SocialLink = styled.a`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  color: ${Theme.colors.gray300};
  &:hover {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

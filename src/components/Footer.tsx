import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSafari,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <Wrapper>
      <h5>
        Made by Satellytes&nbsp; · &nbsp;
        <FooterLink
          title="Satellytes Imprint (de)"
          href="https://satellytes.com/de/imprint/"
          target="_blank"
          rel="noreferrer"
        >
          Imprint
        </FooterLink>
        &nbsp; · &nbsp;
      </h5>

      <SocialLink
        title="Satellytes on LinkedIn"
        href="https://www.linkedin.com/company/satellytes/"
        target="_blank"
      >
        <SocialIcon icon={faLinkedin} />
      </SocialLink>
      <SocialLink
        title="BadgeForge on GitHub"
        href="https://github.com/satellytes/badge-forge"
        target="_blank"
      >
        <SocialIcon icon={faGithub} />
      </SocialLink>
      <SocialLink
        title="Satellytes Website"
        href="https://satellytes.com/"
        target="_blank"
      >
        <SocialIcon icon={faSafari} />
      </SocialLink>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  grid-area: footer;
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray300};
  font-family: ${({ theme }) => theme.font.family.cocoGothic};
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray300};
  &:hover {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.gray300};
  &:hover {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

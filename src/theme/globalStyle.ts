import { createGlobalStyle } from "styled-components";
import "../static/fonts/fonts.css";

export default createGlobalStyle`

html, body {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray50};
    display: flex;
    align-items: center;
    justify-content: center;
}

* {
    font-family: ${({ theme }) => theme.font.face.fallback}; 
    position: relative;
    color: ${({ theme }) => theme.colors.darkBlue};
}
`;

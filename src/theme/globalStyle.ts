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
    font-family: ${({ theme }) => theme.font.family.cocoGothic}; 
    position: relative;
    color: ${({ theme }) => theme.colors.darkBlue};
}
`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

html, body {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray50};
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-family: ${({ theme }) => theme.font.family.cocoGothic};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    padding-top: 5%;
}

button, input {
    font-family: ${({ theme }) => theme.font.family.cocoGothic};
}
`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

html, body {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray50};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) => theme.font.family.cocoGothic};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

button, input {
    font-family: ${({ theme }) => theme.font.family.cocoGothic};
}
`;

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
    @import url("../static/fonts/fonts.css"); 
    font-family: 'CocoGothic', 'Inter', Helvetica, sans-serif; 
    position: relative;
    color: ${({ theme }) => theme.colors.darkBlue};
}
`;

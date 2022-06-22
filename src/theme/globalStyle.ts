import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    //dimensions
    --param-height: 40px;

    //borders
    --param-border: 2px solid ${({ theme }) => theme.colors.gray100};

    //effects
    --param-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
    --param-border-radius: 5px;

    //transitions
    --param-grow: transform 120ms ease-in-out;
}

html, body {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray75};
    display: flex;
    align-items: center;
    justify-content: center;
}

* {
    font-family: 'Inter', Helvetica, sans-serif; 
}
`;

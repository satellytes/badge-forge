import { createGlobalStyle } from "styled-components";
import { light } from "./colors";
export default createGlobalStyle`

:root {
    //colors
    --text: black;
    --appBg: #F5F5F5;
    --wizardBg: #FFFFFF;
    --wizardBd: #D7D7D2;
    --canvasBg: #F2F2F2;
    --canvasBd: #FFFFFF;
    --panelBg: #999;
    --strokeViolet: #794BC4;
    --labelColor: #FFFFFF;
    --uploadColor: #dadada;
    --strokeColor: #D7D7D7;
    --swatchBd: #FFFFFF35;
    --swatchBg: #FBFBFB;
    --label-BLACK: #2E2E2E;
    --iconDivFill: #FBFBFB;

    //dimensions
    --param-height: 40px;

    //borders
    --param-border: 2px solid #D7D7D7;

    //effects
    --param-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
    --param-border-radius: 5px;
    --button-drop: drop-shadow(0.5px 1px 0px ${light.buttonLabelShadow});

    //transitions
    --param-grow: transform 120ms ease-in-out;
}

html, body {
    height: 100%;
    background-color: ${light.appBg};
    display:flex;
    align-items: center;
    justify-content: center;
}

   *{
       font-family: 'Inter', Helvetica, sans-serif; 
   }

`;

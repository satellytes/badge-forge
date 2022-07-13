import { css } from "styled-components";

export const cocoFontFaces = css`
  @font-face {
    font-display: swap;
    font-family: "CocoGothic";
    font-style: normal;
    font-weight: 400;
    src: local("CocoGothic"),
      url("/static/fonts/CocoGothic.woff2") format("woff2"),
      url("/static/fonts/CocoGothic.woff") format("woff"),
      url("/static/fonts/CocoGothic.ttf") format("truetype"),
      url("/static/fonts/CocoGothic.eot") format("embedded-opentype");
  }

  @font-face {
    font-display: swap;
    font-family: "CocoGothic";
    font-style: italic;
    font-weight: 400;
    src: local("CocoGothic Italic"),
      url("/static/fonts/CocoGothic-Italic.woff2") format("woff2"),
      url("/static/fonts/CocoGothic-Italic.woff") format("woff"),
      url("/static/fonts/CocoGothic-Italic.ttf") format("truetype"),
      url("/static/fonts/CocoGothic-Italic.eot") format("embedded-opentype");
  }

  @font-face {
    font-display: swap;
    font-family: "CocoGothic";
    font-style: normal;
    font-weight: 700;
    src: local("CocoGothic Bold"),
      url("/static/fonts/CocoGothic-Bold.woff2") format("woff2"),
      url("/static/fonts/CocoGothic-Bold.woff") format("woff"),
      url("/static/fonts/CocoGothic-Bold.ttf") format("truetype"),
      url("/static/fonts/CocoGothic-Bold.eot") format("embedded-opentype");
  }
`;

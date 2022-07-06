import { DefaultTheme } from "styled-components";

export const Theme: DefaultTheme = {
  colors: {
    // Gray
    gray50: "#ffffff",
    gray60: "#f7f8fa",
    gray75: "#e6e6e6",
    gray100: "#cccccc",
    gray200: "#b3b3b3",
    gray300: "#999999",
    gray400: "#808080",
    gray500: "#666666",
    gray600: "#4d4d4d",
    gray650: "#202840",
    gray700: "#333333",
    gray800: "#191919",
    gray900: "#000000",
    grayTrans: "#00000030",
    // Blue
    blue400: "#a6bfe5",
    blue500: "#799ed8",
    blue600: "#4c7ecb",
    blue700: "#3262ab",
    darkBlue: "#202840",

    // Red
    red400: "#FF0D35",
    redDanger: "#ff0d35",

    // Orange
    orange400: "#ffd199",
    orange500: "#ffba66",
    orange600: "#ffa333",
    orange700: "#ff8c00",

    // Green
    green400: "#b0d5af",
    green500: "#88bf86",
    green600: "#61aa5e",
    green700: "#488546",

    // Turquoise
    turq400: "#17E5C3",

    // Purple
    purple400: "#3E61EE",
  },

  spacing: {
    xxxxs: "-2px",
    xxxs: "4px",
    xxs: "8px",
    xs: "12px",
    s: "16px",
    m: "20px",
    l: "24px",
    xl: "32px",
    xxl: "48px",
    xxxl: "",
  },

  font: {
    family: {
      cocoGothic: "CocoGothic",
    },
    size: {
      h1: "48px",
      h2: "20px",
      h3: "16px",
    },
    weight: {
      regular: 400,
      heavy: 700,
    },
  },

  effects: {
    boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.16)",
    canvasShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)",
    growTransition: "transform 120ms ease-in-out",
  },

  dimensions: {
    boxHeight: "42px",
    swatchHeight: "24px",
    swatchWidth: "46px",
  },

  borders: {
    alert: "2px solid #ff0d35",
    regular: "2px solid transparent",
    focus: "2px solid #e6e6e6",
  },
};

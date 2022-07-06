import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      // Gray
      gray50: string;
      gray60: string;
      gray75: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray650: string;
      gray700: string;
      gray800: string;
      gray900: string;
      grayTrans: string;

      // Blue
      blue400: string;
      blue500: string;
      blue600: string;
      blue700: string;
      darkBlue: string;

      // Red
      red400: string;
      redDanger: string;

      // Orange
      orange400: string;
      orange500: string;
      orange600: string;
      orange700: string;

      // Green
      green400: string;
      green500: string;
      green600: string;
      green700: string;

      // Turquoise
      turq400: string;

      // Purple
      purple400: string;
    };

    spacing: {
      xxxxs: string;
      xxxs: string;
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };

    font: {
      face: {
        default: string;
        fallback?: string;
      };
      size: {
        h1: string;
        h2: string;
        h3: string;
      };
    };

    effects: {
      boxShadow: string;
      canvasShadow: string;
      growTransition: string;
    };

    dimensions: {
      boxHeight: string;
      swatchHeight: string;
      swatchWidth: string;
    };

    borders: {
      alert: string;
      regular: string;
      focus: string;
    };
  }
}

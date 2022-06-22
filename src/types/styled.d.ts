import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      // Gray
      gray50: string;
      gray75: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;

      // Blue
      blue400: string;
      blue500: string;
      blue600: string;
      blue700: string;

      // Red
      red400: string;
      red500: string;
      red600: string;
      red700: string;

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

      // Purple
      purple400: string;
      purple500: string;
      purple600: string;
      purple700: string;
    };

    spacing: {
      xs: string;
      s: string;
      m: string;
    };
  }
}

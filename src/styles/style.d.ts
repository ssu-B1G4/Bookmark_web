import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      green: string;
      lightGreen: string;
      gradation1: string;
      gradation2: string;
      gradation3: string;
      gradation4: string;
      gradation5: string;
      gradationBG: string;
      black: string;
      semiBlack: string;
      gray: string;
      semiGray: string;
      white: string;
    };
    commons: {
      scrollbar: SerializedStyles;
    };
  }
}

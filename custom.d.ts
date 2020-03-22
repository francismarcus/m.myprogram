import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    color: string;
    type: string;
    primaryText: string;
    colors: {
      bg: string;
      primary: string;
      secondary: string;
      accent: string;
      text: string;

      watermelon: string;
      green: string;
      darkcyan: string;
      orange: string;
      charcoal: string;
      bluecharcoal: string;
      grey: string;
      white: string;
    };
    spacing: {
      tiny: string;
      small: string;
      base: string;
      large: string;
      xlarge: string;
    };
    fz: {
      micro: string;
      small: string;
      regular: string;
      large: string;
      t3: string;
      t2: string;
      t1: string;
    };
  }
}

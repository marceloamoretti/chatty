export interface Theme {
  borderRadius: {
    radiusRounded: number;
    radiusSquare: number;
  };
  colors: {
    bgPrimary: string;
    bgSecondary: string;
    primary: string;
    secondary: string;
  };
  fontFamily: {
    medium: string;
    regular: string;
    semibold: string;
  };
  fontSizes: {
    large: number;
    regular: number;
  };
}

export type FontStyle = keyof Theme['fontFamily'];

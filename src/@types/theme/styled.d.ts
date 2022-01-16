import { FontTheme } from '@Types/theme/font';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      PRIMARY: string,
      SECONDARY: string,
      TERTIARY: string,
      BACKGROUND: string,
      BACKGROUND_LIGHT: string,
      H2: string,
      RED: string,
      GREEN: string
    },

    FONT:FontTheme
  }
}

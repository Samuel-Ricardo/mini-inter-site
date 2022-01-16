import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      PRIMARY: string,
      SECONDARY: string,
      TERTIARY: string,
      BACKGROUND: string,
      BACKGROUND_LIGHT: string,
      RED: string,
      GREEN: string
    }
  }
}

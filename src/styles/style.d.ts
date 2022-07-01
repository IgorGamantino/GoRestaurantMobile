import 'styled-components';
import { theme } from './global';


declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType { }
}


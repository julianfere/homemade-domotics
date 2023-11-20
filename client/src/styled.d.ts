// styled.d.ts
import {ThemeType} from './config/Theme';
import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}

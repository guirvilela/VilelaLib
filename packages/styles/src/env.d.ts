import { Theme } from './variables/theme';

declare module 'styled-components' {
  import 'styled-components';

  interface DefaultTheme extends Theme {
    changeTheme: (theme: Partial<Theme>) => void;
  }
}

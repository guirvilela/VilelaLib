import { Theme } from '@hubert/styles';

declare module 'styled-components' {
  import 'styled-components';
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

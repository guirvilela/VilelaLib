import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import { render } from '@testing-library/react';
import React from 'react';

import { HubYesNo } from '.';

describe('HubYesNo component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubYesNo opened title="asd" onClose={jest.fn()} onDone={jest.fn()} />,
      {
        wrapper: wrapse(ThemeProvider, I18nProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

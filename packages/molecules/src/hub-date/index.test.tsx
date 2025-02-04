import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import { render } from '@testing-library/react';
import React from 'react';

import { HubDate } from '.';

describe('HubDate component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubDate id={''} />, {
      wrapper: wrapse(ThemeProvider, I18nProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

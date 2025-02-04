import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import { render } from '@testing-library/react';
import React from 'react';

import { HubAvatarMenu } from '.';

describe('HubAvatarMenu component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubAvatarMenu />, {
      wrapper: wrapse(ThemeProvider, I18nProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import React from 'react';

import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubPasswordStrength } from '.';

describe('HubPasswordStrength component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubPasswordStrength password="asdasd123@" />,
      {
        wrapper: wrapse(ThemeProvider, I18nProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

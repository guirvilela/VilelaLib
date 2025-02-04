import { render } from '@testing-library/react';
import React from 'react';

import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubFileUpload } from '.';

describe('HubFileUpload component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubFileUpload />, {
      wrapper: wrapse(ThemeProvider, I18nProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

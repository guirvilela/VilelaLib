import { render } from '@testing-library/react';
import React from 'react';

import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubPagination } from '.';

describe('HubPagination component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubPagination />, {
      wrapper: wrapse(ThemeProvider, I18nProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

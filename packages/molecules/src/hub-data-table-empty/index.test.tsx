import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import { render } from '@testing-library/react';
import React from 'react';

import { HubDataTableEmpty } from '.';

describe('HubDataTableEmpty component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubDataTableEmpty title={'aaaa'} content={'bbbbb'} />,
      {
        wrapper: wrapse(ThemeProvider, I18nProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

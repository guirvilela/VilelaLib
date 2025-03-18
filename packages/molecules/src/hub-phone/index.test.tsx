import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import { render } from '@testing-library/react';
import React from 'react';

import { HubPhone } from '.';

describe('HubPhone component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubPhone
        id="asd"
        ddi="55"
        ddd="11"
        phone="912344321"
        onChange={jest.fn()}
      />,
      {
        wrapper: wrapse(ThemeProvider, I18nProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

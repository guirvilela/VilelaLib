import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import { render } from '@testing-library/react';
import React from 'react';

import { HubModalRight } from '.';

describe('HubModalRight component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubModalRight opened onDone={jest.fn()} onClose={jest.fn()}>
        asdasdasd
      </HubModalRight>,
      {
        wrapper: wrapse(ThemeProvider, I18nProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

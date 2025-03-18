import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubSidenav } from '.';

describe('HubSidenav component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubSidenav />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

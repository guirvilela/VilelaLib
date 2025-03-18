import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubNavbar } from '.';

describe('HubNavbar component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubNavbar />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

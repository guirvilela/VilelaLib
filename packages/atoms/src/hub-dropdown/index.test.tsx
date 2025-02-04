import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubDropdown } from '.';

describe('HubDropdown component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubDropdown />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

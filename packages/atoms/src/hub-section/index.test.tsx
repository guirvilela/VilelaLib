import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubSection } from '.';

describe('HubSection component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubSection />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

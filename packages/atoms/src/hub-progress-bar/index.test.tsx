import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubProgressBar } from '.';

describe('HubProgressBar component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubProgressBar percent="50" />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

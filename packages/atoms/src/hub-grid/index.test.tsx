import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubGrid } from '.';

describe('HubGrid component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubGrid />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

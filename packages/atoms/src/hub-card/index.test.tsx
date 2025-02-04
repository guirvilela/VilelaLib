import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubCard } from '.';

describe('HubCard component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubCard />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

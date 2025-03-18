import { wrapse } from '@hubert/shared';
import { render } from '@testing-library/react';
import React from 'react';

import { ThemeProvider } from '@hubert/styles';

import { HubBadge } from '.';

describe('HubBadge component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubBadge>Test</HubBadge>, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

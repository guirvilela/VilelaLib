import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubSkeleton } from '.';

describe('HubSkeleton component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubSkeleton />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

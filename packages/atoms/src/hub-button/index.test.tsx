import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubButton } from '.';

describe('HubButton component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubButton />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubSeparator } from '.';

describe('HubSeparator component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubSeparator />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

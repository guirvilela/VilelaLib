import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubAnimation } from '.';

describe('HubAnimation component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubAnimation />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

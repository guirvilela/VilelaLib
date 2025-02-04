import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubCollapse } from '.';

describe('HubCollapse component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubCollapse />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

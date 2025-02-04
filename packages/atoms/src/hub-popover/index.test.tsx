import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubPopover } from '.';

describe('HubPopover component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubPopover />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

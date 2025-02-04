import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubTooltip } from '.';

describe('HubTooltip component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubTooltip />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

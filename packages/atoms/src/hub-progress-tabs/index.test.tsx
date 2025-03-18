import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import { render } from '@testing-library/react';
import React from 'react';

import { HubProgressTabs } from '.';

describe('HubProgressTabs component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubProgressTabs />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import { render } from '@testing-library/react';
import React from 'react';

import { HubTabs } from '.';

describe('HubTabs component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubTabs />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

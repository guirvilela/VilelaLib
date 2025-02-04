import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubText } from '.';

describe('HubText component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubText typo="body1" />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

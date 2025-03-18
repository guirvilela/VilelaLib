import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubTextField } from '.';

describe('HubTextField component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubTextField id="test" />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

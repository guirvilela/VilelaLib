import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubRadio } from '.';

describe('HubRadio component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubRadio id="test" />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

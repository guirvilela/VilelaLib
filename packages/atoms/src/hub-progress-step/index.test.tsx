import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubProgressStep } from '.';

describe('HubProgressStep component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubProgressStep done />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

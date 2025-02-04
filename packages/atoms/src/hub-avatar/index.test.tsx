import { wrapse } from '@hubert/shared';
import { render } from '@testing-library/react';
import React from 'react';

import { ThemeProvider } from '@hubert/styles';

import { HubAvatar } from '.';

describe('HubAvatar component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubAvatar src="/assets/logo192.png" alt="logo" />,
      {
        wrapper: wrapse(ThemeProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

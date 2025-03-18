import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubIcon } from '.';

describe('HubIcon component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubIcon icon={jest.fn()} />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

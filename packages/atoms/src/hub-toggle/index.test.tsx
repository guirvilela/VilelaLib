import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubToggle } from '.';

describe('HubToggle component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubToggle id="test" checked>
        Test
      </HubToggle>,
      {
        wrapper: wrapse(ThemeProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

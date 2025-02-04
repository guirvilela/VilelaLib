import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubCheckbox } from '.';

describe('HubCheckbox component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubCheckbox id="test" checked>
        Test
      </HubCheckbox>,
      {
        wrapper: wrapse(ThemeProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

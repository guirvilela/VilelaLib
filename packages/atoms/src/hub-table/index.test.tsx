import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubTable } from '.';

describe('HubTable component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubTable columns={[]} data={[]} />, {
      wrapper: wrapse(ThemeProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubAlert } from '.';

describe('HubAlert component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubAlert title="Title Test" content="Content test" />,
      {
        wrapper: wrapse(ThemeProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

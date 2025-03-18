import { render } from '@testing-library/react';
import React from 'react';

import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';

import { HubList, HubListItem } from '.';

describe('HubList component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubList>
        <HubListItem>Item1</HubListItem>
        <HubListItem>Item2</HubListItem>
        <HubListItem>Item3</HubListItem>
      </HubList>,
      {
        wrapper: wrapse(ThemeProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

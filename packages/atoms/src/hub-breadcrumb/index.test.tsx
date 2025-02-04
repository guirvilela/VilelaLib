import { wrapse } from '@hubert/shared';
import { render } from '@testing-library/react';
import React from 'react';

import { ThemeProvider } from '@hubert/styles';

import { HubBreadcrumb, HubBreadcrumbs } from '.';

describe('HubBreadcrumb component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubBreadcrumbs>
        <HubBreadcrumb>Test1</HubBreadcrumb>
        <HubBreadcrumb active>Test2</HubBreadcrumb>
      </HubBreadcrumbs>,
      {
        wrapper: wrapse(ThemeProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

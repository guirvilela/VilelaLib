import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import { render } from '@testing-library/react';
import React from 'react';

import { HubWebCam } from '.';

describe('HubWebCam component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HubWebCam onDone={jest.fn()} />, {
      wrapper: wrapse(ThemeProvider, I18nProvider)
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

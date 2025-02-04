import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import { render } from '@testing-library/react';
import React from 'react';

import { HubFeedback } from '.';

describe('HubFeedback component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubFeedback
        opened={true}
        title="asdasdasd"
        content="asdasdasd"
        status="error"
      />,
      {
        wrapper: wrapse(ThemeProvider, I18nProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

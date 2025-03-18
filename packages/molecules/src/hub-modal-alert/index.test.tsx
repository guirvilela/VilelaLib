import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import { render } from '@testing-library/react';
import React from 'react';

import { HubModalAlert } from '.';

describe('HubModalAlert component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubModalAlert
        opened={true}
        title="asdasdasd"
        content="asdasdasd"
        status="error"
        onDone={jest.fn()}
        onClose={jest.fn()}
        onCloseMsg={jest.fn()}
      />,
      {
        wrapper: wrapse(ThemeProvider, I18nProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

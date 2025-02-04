import { HubTextField } from '@hubert/atoms';
import { I18nProvider } from '@hubert/i18n';
import { wrapse } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import { render } from '@testing-library/react';
import React from 'react';

import { HubFilters } from '.';

describe('HubFilters component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <HubFilters>
        <HubTextField id="field-a" readOnly>
          field-a
        </HubTextField>
        <HubTextField id="field-b" readOnly>
          field-b
        </HubTextField>
      </HubFilters>,
      {
        wrapper: wrapse(ThemeProvider, I18nProvider)
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

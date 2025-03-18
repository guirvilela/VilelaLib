import { I18nProvider } from '@hubert/i18n';
import { compose, numberFormatter, replaceAll } from '@hubert/shared';
import { ThemeProvider } from '@hubert/styles';
import prettierBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import React from 'react';

import '@hubert/styles/lib/styles.css';
import './markdown.css';

function transformSourceErrors(snippet) {
  let result = String(snippet);
  result = replaceAll(result, '[object Object]', '{}');
  return result;
}

function transformSourceHubIcon(snippet) {
  let result = String(snippet);
  result = replaceAll(result, 'function noRefCheck() {}', '() => {}');
  result = replaceAll(result, 'function noRefCheck(){}', '() => {}');
  result = replaceAll(
    result,
    'HubIcon icon={() => {}}',
    'HubIcon icon={IconNameChosen}'
  );
  result = replaceAll(
    result,
    'HubIcon icon={function noRefCheck(){}}',
    'HubIcon icon={IconNameChosen}'
  );
  result = replaceAll(
    result,
    'HubIcon icon={function noRefCheck() {}}',
    'HubIcon icon={IconNameChosen}'
  );
  return result;
}

function transformSourcePrettier(snippet) {
  const formated = prettier.format(snippet, {
    parser: 'babel',
    plugins: [prettierBabel]
  });
  return replaceAll(formated, ';', '');
}

function storySort(a, b) {
  //? arquivos mais utilizados
  const order = ['get-started', 'overview', 'summary', '--default'];
  if (order.some((x) => a[0].includes(x))) {
    return -1;
  }
  if (order.some((x) => b[0].includes(x))) {
    return 1;
  }

  //? outros tipos gerais, ordenado pelo numero no filename
  const nameA = numberFormatter(a[2].fileName);
  const nameB = numberFormatter(b[2].fileName);
  return Number(nameA) < Number(nameB) ? -1 : 1;
}

export const parameters = {
  layout: 'centered',
  viewMode: 'docs',
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  backgrounds: { default: 'light' },
  options: { storySort },
  docs: {
    transformSource: (snippet) =>
      compose(
        transformSourceErrors,
        transformSourceHubIcon,
        transformSourcePrettier
      )(snippet)
  }
};

export const decorators = [
  (story) => (
    <ThemeProvider configs={{ withGlobals: true }}>
      <I18nProvider>{story()}</I18nProvider>
    </ThemeProvider>
  )
];

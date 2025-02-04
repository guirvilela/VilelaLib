# Hubert Tour Library

Esta biblioteca contem e deve somente conter codigo relacionado a tour/tooltip de ajuda e treinamento para js/ts.

- [Voltar para readme principal](../../README.md)

## Como usar

```
npm i @hubert/tour
```

Exemplo:

```jsx
import React from 'react';
import { HubTour, useTour } from '@hubert/tour';

const { runTour, showTourHints } = useTour();

//? Inicia o tour ao iniciar a pagina
React.useEffect(() => {
  runTour({
    showBullets: false,
    dontShowAgainCookie: config.keys.tourLegacyLink
  });
}, []);

//? Mostra todos os hints ao iniciar a pagina
React.useEffect(() => {
  showTourHints();
}, []);

return (
  <>
    <HubTour title="Titulo do tour" content="Conteudo do tour">
      {/* Elemento que o tour usara como ancora (igual tooltip) */}
      <Filho>
    </HubTour>

    ...

    <HubTour hint="Conteudo do hibt">
      {/* Elemento que o tour usara como ancora (igual tooltip) */}
      <Filho>
    </HubTour>
  </>
);
```

Keep calm and code on 🤘.

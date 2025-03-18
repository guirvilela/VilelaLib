# Hubert Data Export

Esta biblioteca contem e deve somente conter codigo relacionado a exportação de dados via pdf, csv ou imagem para js/ts.

- [Voltar para readme principal](../../README.md)

## Como usar

Instalação completa

```
npm i pdfmake@0.2.9 html-to-image@1.11.11 @hubert/data-export
```

Instalação separada, exportar somente imagens (para diminuir o build final)

```
npm i html-to-image@1.11.11 @hubert/data-export
```

Instalação separada, exportar somente pdf

```
npm i pdfmake@0.2.9 @hubert/data-export
```

Exemplo gerar CSV:

```js
import React from 'react';
import { exportCSV } from '@hubert/data-export';

export function Controller() {
  const handleDownloadCSV = React.useCallback(() => {
    exportCSV('lista-contratos', [
      { id: 1, valor: 1000 },
      { id: 2, valor: 2000 },
      { id: 3, valor: 3000 }
    ]);
  }, []);

  return {
    handleDownloadCSV
  };
}
```

Exemplo gerar Image:

```js
import React from 'react';
import { exportImage } from '@hubert/data-export';

export function Controller() {
  const elementRef = React.useRef<HTMLElement>();

  const handleDownloadImage = React.useCallback(
    () => {
      // Default is JPEG
      exportImage(
        'relatorio-reservas',
        elementRef.current
      );

      // Download as another type
      exportImage(
        'relatorio-reservas',
        elementRef.current,
        ExportImageType.PNG
      );
    },
    []
  );

  return {
    handleDownloadImage
  };
}
```

Exemplo gerar PDF:

```js
import React from 'react';
import { exportPDF, ExportPDFTableUtils } from '@hubert/data-export';
import { useI18nFormatter } from '@hubert/i18n';

export function Controller() {
  const f = useI18nFormatter();

  const handleDownloadPDF = React.useCallback(() => {
    exportPDF('relatorio-reservas', [
      {
        text: 'RELATORIO RESERVAS',
        style: 'title',
        alignment: 'center',
        margin: [0, 3]
      },
      {
        text: `${condominioSelected.codCondominio} - ${condominioSelected.nomeCondominio}`,
        style: 'subtitle',
        alignment: 'center',
        margin: [0, 2]
      },
      {
        text: `PERÍODO: ATÉ ${f.dateFormatter(new Date())}`,
        style: 'body',
        alignment: 'center',
        margin: [0, 2]
      },
      {
        margin: [0, 10],
        table: {
          headerRows: 0,
          widths: ['*', 100, 100, 100],
          body: [
            [
              ExportPDFTableUtils.HeaderLeft('CODIGO', {
                fillColor: '#fff'
              }),
              ExportPDFTableUtils.HeaderRight('DESCRICAO', {
                fillColor: '#fff'
              })
            ],
            ...reservas.payload.map((x) => [
              ExportPDFTableUtils.BodyLeft(x.codigoReserva, {
                border: [true, true, false, false]
              }),
              ExportPDFTableUtils.BodyRight(x.descricao, {
                format: false,
                border: [false, true, false, false]
              })
            ]),
            [
              ExportPDFTableUtils.FooterLeft('TOTAL GERAL', {
                fillColor: '#eee'
              }),
              ExportPDFTableUtils.FooterRight(reservas.payload.length, {
                fillColor: '#eee'
              })
            ]
          ]
        }
      }
    ]);
  }, []);

  return {
    handleDownloadPDF
  };
}
```

Keep calm and code on 🤘.

import { downloadFromByteArray } from "../../../shared/src/utils/browser";

function removeSpecialChar(str: string) {
  const within =
    "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
  const without =
    "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";

  let result = "";

  for (let i = 0; i < str.length; i++) {
    let change = false;
    for (let a = 0; a < within.length; a++) {
      if (str.substr(i, 1) == within.substr(a, 1)) {
        result += without.substr(a, 1);
        change = true;
        break;
      }
    }
    if (change == false) {
      result += str.substr(i, 1);
    }
  }
  return result;
}

function contentToCsv<T extends object>(content: T[], header?: string[]) {
  const keys = Object.keys(content[0]);
  const head = (header || keys).join(";");
  const body = (header ? content : content.slice(1)).map((x) =>
    removeSpecialChar(Object.values(x).join(";"))
  );

  return [head, ...body].join("\n");
}

/**
 * Generate CSV from Array and download file
 * @param name String (nome arquivo)
 * @param content Array (dados a ser utilizado)
 * @param header Array (opcional, quando enviar o header não utilizamos a primeira linha do content como header)
 *
 * @example
 * await exportCSV('nome-arquivo-x', [{ a: 'A', b: 'B', c: 'C' }]);
 */
export function exportCSV<T extends object>(
  name: string,
  content: T[],
  header?: string[]
) {
  const result = contentToCsv(content, header);
  downloadFromByteArray(
    // [new Uint8Array([0xef, 0xbb, 0xbf]), result],
    ["\ufeff", result],
    `${name}.csv`,
    "text/csv;charset=utf-8"
  );
}

/**
 * Generate Excel from Array and download file
 * @param name String (nome arquivo)
 * @param content Array (dados a ser utilizado)
 * @param header Array (opcional, quando enviar o header não utilizamos a primeira linha do content como header)
 *
 * @example
 * await exportExcel('nome-arquivo-x', [{ a: 'A', b: 'B', c: 'C' }]);
 */
export function exportExcel<T extends object>(
  name: string,
  content: T[],
  header?: string[]
) {
  const result = contentToCsv(content, header);
  downloadFromByteArray(result, `${name}.xls`);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../config';
import { exportImage, ExportImageType, generateImage } from '../image';

declare const jQuery: any;
declare const QRCode: any;

async function importScripts() {
  return new Promise((resolve) => {
    if (typeof QRCode !== 'undefined') {
      return resolve(true);
    }

    if (typeof jQuery === 'undefined') {
      const jquery = document.createElement('script');
      jquery.src = config.jQueryScript;
      document.head.appendChild(jquery);
    }

    const script = document.createElement('script');
    script.src = config.qrcodeScript;

    script.onload = function () {
      resolve(true);
    };

    document.head.appendChild(script);
  });
}

const optsDefault = {
  width: 128,
  height: 128,
  colorDark: '#000000',
  colorLight: '#ffffff'
};

type Options = Partial<typeof optsDefault>;

/**
 * Generate QRCode render in html
 * @param el HTMLElement
 * @param content String (Conteudo do QRCode, texto normal)
 *
 * @example
 * await renderQrCode(ref.current, 'Hello World!');
 * await renderQrCode(document.getElementById('teste'), 'Hello World!');
 */
export async function renderQrCode<T = HTMLElement>(
  el: T | null,
  content: string,
  options?: Options
) {
  await importScripts();

  new QRCode(el, {
    ...(options || optsDefault),
    text: content
  });
}

/**
 * Generate QRCode return url in base64
 * @returns url String
 *
 * @example
 * const url = await generateQrCode('Hello World!');
 */
export async function generateQrCode(
  content: string,
  options?: Options
): Promise<string> {
  await importScripts();

  const el = document.createElement('div');
  document.body.appendChild(el);

  new QRCode(el, {
    ...(options || optsDefault),
    text: content
  });

  const url = await generateImage(el);

  document.body.removeChild(el);

  return url;
}

/**
 * Generate QRCode download file
 * @param name String (nome arquivo)
 * @param content String (conteudo do qrcode)
 *
 * @example
 * await exportQrCode('nome-arquivo-x', 'Hello World!');
 */
export async function exportQrCode(
  name: string,
  content: string,
  options?: Options
) {
  await importScripts();

  const el = document.createElement('div');
  document.body.appendChild(el);

  new QRCode(el, {
    ...(options || optsDefault),
    text: content
  });

  await exportImage(name, el, ExportImageType.PNG);

  document.body.removeChild(el);
}

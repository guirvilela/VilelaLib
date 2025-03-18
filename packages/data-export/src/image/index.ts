/* eslint-disable @typescript-eslint/no-explicit-any */
import { downloadFromBlob } from "../../../shared/src/utils/browser";

import config from "../config";

declare const htmlToImage: any;

async function importScripts() {
  return new Promise((resolve) => {
    if (typeof htmlToImage !== "undefined") {
      return resolve(true);
    }

    const script = document.createElement("script");
    script.src = config.htmlToImageScript;

    script.onload = function () {
      resolve(true);
    };

    document.head.appendChild(script);
  });
}

/**
 * Tipos de imagens disponivel para exportar o arquivo qrcode
 */
export enum ExportImageType {
  PNG = 1,
  JPEG = 2,
  BLOB = 3,
  SVG = 4,
}

function filter(node: HTMLElement) {
  return !node.classList?.contains("ignore");
}

interface Options {
  backgroundColor?: string;
  width?: string;
  height?: string;
  quality?: number;
  cacheBust?: boolean;
  imagePlaceholder?: string;
  pixelRatio?: number;
  skipAutoScale?: boolean;
  filter?: typeof filter;
}

/**
 * Generate Image from HTML and download file
 * @param name String (nome arquivo)
 * @param el HTMLElement (elemento html que sera utilizado)
 * @param type ExportImageType (PNG, JPEG, BLOB, SVG)
 *
 * @example
 * await exportImage('nome-arquivo-x', document.getElementById('asd'));
 * await exportImage('nome-arquivo-x', elementRef.content);
 */
export async function exportImage<T = HTMLElement>(
  name: string,
  el: T | null,
  type?: ExportImageType,
  options?: Options
): Promise<void> {
  if (!el) return Promise.resolve();

  await importScripts();

  let transform,
    ext = "";

  switch (type) {
    case ExportImageType.PNG:
      transform = htmlToImage.toPng;
      ext = ".png";
      break;
    case ExportImageType.BLOB:
      transform = htmlToImage.toBlob;
      break;
    case ExportImageType.SVG:
      transform = htmlToImage.toSvg;
      ext = ".svg";
      break;
    default:
      transform = htmlToImage.toJpeg;
      ext = ".jpeg";
      break;
  }

  return transform(el, {
    cacheBust: true,
    filter,
    backgroundColor: "#fff",
    ...options,
  }).then((url) => {
    if (type === ExportImageType.BLOB) {
      return downloadFromBlob(url, name);
    }

    const link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    link.download = `${name}${ext}`;

    document.body.appendChild(link);
    link.click();

    setTimeout(() => document.body.removeChild(link), 0);
  });
}

/**
 * Generate Image from HTML and return url as base64
 * @param el HTMLElement (elemento html que sera utilizado)
 *
 * @example
 * const url = await generateImage(document.getElementById('asd'));
 * const url = await generateImage(elementRef.content);
 */
export async function generateImage<T extends HTMLElement>(
  el: T | null,
  options?: Options
) {
  if (!el) return Promise.resolve("");

  await importScripts();

  return htmlToImage.toPng(el, {
    cacheBust: true,
    filter,
    backgroundColor: "#fff",
    ...options,
  });
}

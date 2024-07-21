import { replaceAll } from "./string";

/**
 * Get element position on screen
 * @param element HTMLElement
 * @return Object { x, y }
 */
export function getElementPosition(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY,
  };
}

/**
 * Prevent defaults util to functional compose
 * @param fn Function
 * @return Function
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function preventDefault(fn?: (...args: any[]) => any) {
  return (e: Event) => {
    e.preventDefault();
    fn?.();
  };
}

/**
 * Get position of scroll on screen
 * @return Object coordinates
 */
export function scrollPosition() {
  const doc = document.documentElement;
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  const bottom = top + doc.clientHeight;
  const right = left + doc.clientWidth;
  return { top, right, bottom, left };
}

/**
 * Return language of browser
 * @return String
 */
export function getLocale(): string {
  return typeof navigator !== "undefined" ? navigator.language : "";
}

/**
 * Return languages of browser
 * @return String
 */
export function getLocales(): string[] {
  return typeof navigator !== "undefined"
    ? navigator.languages?.slice() || []
    : [];
}

/**
 * Print element dom
 * @param element Element
 * @param title String (optional)
 * @param mode portrait | landscape (optional)
 */
export function print(
  element: Element,
  title?: string,
  mode?: "portrait" | "landscape"
) {
  const w = window.open(
    "",
    "PRINT",
    mode === "portrait" ? "width=1400,height=900" : "width=900,height=1400"
  );

  if (w) {
    const content = `
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body>${element.innerHTML}</body>
      </html>
    `;
    w.document.write(content);
    w.print();
    w.close();
  }
}

/**
 * Create or update css property of element
 * @param key String
 * @param value String
 * @param el HTMLElement (default is root)
 */
export function setCssProperty(key: string, value: string, el?: HTMLElement) {
  const element = el || document.documentElement;
  element.style.setProperty(key, value);
}

/**
 * Return true if is Browser
 * @return Boolean
 */
export function isBrowser() {
  return typeof window !== "undefined";
}

/**
 * Return true if is Browser for testing (jest)
 * @return Boolean
 */
export function isTestingBrowser() {
  return (
    typeof process !== "undefined" &&
    typeof window !== "undefined" &&
    process.env?.NODE_ENV === "test"
  );
}

/**
 * Return true if is Safari Browser
 * @return Boolean
 */
export function isSafari() {
  if (typeof navigator !== "undefined") {
    return (
      navigator.vendor &&
      navigator.vendor.indexOf("Apple") > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf("CriOS") == -1 &&
      navigator.userAgent.indexOf("FxiOS") == -1
    );
  }
  return false;
}

/**
 * Return true if is Firefox Browser
 * @return Boolean
 */
export function isFirefox() {
  if (typeof navigator !== "undefined") {
    return navigator.userAgent.includes("Firefox");
  }
  return false;
}

/**
 * Return true if is Chrome Browser
 * @return Boolean
 */
export function isChrome() {
  if (typeof navigator !== "undefined") {
    return navigator.userAgent.includes("Chrome");
  }
  return false;
}

/**
 * Return true if is Opera Browser
 * @return Boolean
 */
export function isOpera() {
  if (typeof navigator !== "undefined") {
    return navigator.userAgent.includes("Opera");
  }
  return false;
}

/**
 * Return true if is Internet Explorer Browser
 * @return Boolean
 */
export function isIE() {
  if (typeof navigator !== "undefined") {
    return navigator.userAgent.includes("MSIE");
  }
  return false;
}

/**
 * Return true if is Mobile Browser
 * @return Boolean
 */
export function isMobile() {
  if (isBrowser()) {
    const agent = (navigator.userAgent || navigator.vendor).substring(0, 4);
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        agent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        agent
      )
    );
  }
  return false;
}

/**
 * Return true if is page in iframe
 * @return Boolean
 */
export function isIframe() {
  if (isBrowser()) {
    try {
      return window.self !== window.top;
    } catch {
      return true;
    }
  }
  return false;
}

/**
 * Return true if is Android Browser
 * @return Boolean
 */
export function isAndroid() {
  if (isBrowser()) {
    return /Android/i.test(navigator.userAgent);
  }
  return false;
}

/**
 * Return true if is iOS Browser
 * @return Boolean
 */
export function isIOS() {
  if (isBrowser()) {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  return false;
}

/**
 * Send content to Clipboard
 */
export function sendToClipboard(content: string) {
  const el = document.createElement("textarea");
  el.value = content;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

/**
 * Create link by Blob
 */
export function downloadFromBlob(blob: Blob, filename: string) {
  const blobURL = (
    window.URL ? window.URL : window["webkitURL"]
  ).createObjectURL(blob);
  const tempLink = document.createElement("a");
  tempLink.style.display = "none";
  tempLink.href = blobURL;
  tempLink.setAttribute("download", filename);
  tempLink.setAttribute("target", "_blank");

  document.body.appendChild(tempLink);
  tempLink.click();

  setTimeout(function () {
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(blobURL);
  }, 0);
}

/**
 * Download file from Array of bytes
 */
export function downloadFromByteArray(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  filename: string,
  contentType = "application/octet-stream"
) {
  const blob = new Blob([data], { type: contentType });
  downloadFromBlob(blob, filename);
}

/**
 * Download file from Base64
 */
export function downloadFromBase64(
  b64: string,
  filename: string,
  contentType = "application/octet-stream",
  sliceSize = 512
) {
  const byteCharacters = atob(b64);
  const byteArrays: Uint8Array[] = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  downloadFromBlob(blob, filename);
}

/**
 * Download file from url
 */
export async function downloadFromUrl(url: string, forceDownload?: boolean) {
  if (forceDownload) {
    try {
      const blob = await fetch(url).then((response) => response.blob());
      downloadFromBlob(blob, getFilenameFromUrl(url));
      return;
    } catch {
      //
    }
  }

  const tempLink = document.createElement("a");
  tempLink.style.display = "none";
  tempLink.href = url;
  tempLink.setAttribute("download", url.replace(/^.*[\\/]/, ""));
  tempLink.setAttribute("target", "_blank");

  document.body.appendChild(tempLink);
  tempLink.click();

  setTimeout(() => document.body.removeChild(tempLink), 0);
}

/**
 * Return domain url
 * @param url String
 * @return String
 */
export function domainFromUrl(url?: string) {
  if (!url) return "";
  const hostname = String(
    ["http://", "https://", /:[0-9]{4}/gi].reduce(
      (acc, x) => replaceAll(String(acc), x, ""),
      url
    )
  );
  const index = hostname.indexOf(".");
  if (index === -1) {
    return hostname;
  }
  // const domain = url.includes('.vilela') ? '.vilela.com.br' : url;
  return hostname.slice(index);
}

/**
 * Extract filename from url/uri string
 * @param url String
 * @return String
 */
export function getFilenameFromUrl(url?: string) {
  if (!url) return "";
  return url.replace(/^.*[\\/]/, "");
}

/**
 * Return element by DOM query search
 * @param query String (byTag = elementTag, byID = #elementId, byClass = .className)
 * @return HTMLElement
 */
export function $<T = HTMLElement>(query: string) {
  let el;

  const name = query.slice(1);

  if (query.includes("#")) {
    el = document.getElementById(name);
  } else if (query.includes(".")) {
    el = document.getElementsByClassName(name)[0];
  } else {
    el = document.getElementsByTagName(name)[0];
  }

  return el as T | null;
}

/**
 * Scroll to position of element
 * @param el Element
 * @param top Number
 * @param left Number
 */
export function scrollTo(el: HTMLElement, top: number, left?: number) {
  el.scrollTo({
    top,
    left,
    behavior: "smooth",
  });
}

/**
 * Return true if url is a external link
 * @param url String
 */
export function isExternalLink(url?: string) {
  if (!url) return false;
  return url.includes("http");
}

/**
 * Return true if url is a azure webapp or localhost
 * @param env String
 */
export function isLocalhostOrAzureEnv(env?: string) {
  if (isBrowser()) {
    return [env || ["-dev", "-stage"], "localhost"]
      .flat()
      .some((x) => window.location.href.includes(x));
  }
  return false;
}

/**
 * Return url with azure webapp env or localhost
 * @param url String (webapp url)
 * @param path String (path and/or params)
 * @param port Number (localhost port)
 * @returns String
 */
export function buildUrlWithEnv(url: string, path?: string, port?: number) {
  if (isBrowser()) {
    const href = window.location.href;

    if (href.includes("localhost")) {
      return `http://localhost:${port || 3000}${path}`;
    }

    const parts = url.split(".");

    if (href.includes("-dev")) {
      parts[0] += "-dev";
    }
    if (href.includes("-stage")) {
      parts[0] += "-stage";
    }
    return `${parts.join(".")}${path}`;
  }
  return "";
}

/**
 * Resize DOM window
 * @param x Number (width)
 * @param y Number (height)
 */
export function resizeWindow(x: number, y?: number) {
  window.innerWidth = x;
  if (y) {
    window.innerHeight = y;
  }
}

/**
 * Read file and return string of File API DOM
 * @param file File
 * @return String | ArrayBuffer
 */
export async function fileReader(file: File) {
  return new Promise<string | ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result || "");
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
}

/**
 * Custom Vilela backend encode params of uri
 * @param v String
 * @return String
 */
export function simpleEncodeURI(v?: string) {
  if (typeof v !== "string") return v;
  return replaceAll(v, "/", "%2F");
}

/**
 * Custom Vilela backend encode params of uri
 * @param v String
 * @return String
 */
export function simpleDecodeURI(v?: string) {
  if (typeof v !== "string") return v;
  return replaceAll(v, "%2F", "/");
}

/**
 * Custom Vilela backend encode params of uri
 * @param v String
 * @return String
 */
export function doubleEncodeURI(v?: string) {
  if (typeof v !== "string") return v;
  return replaceAll(v, "/", "%252F");
}

/**
 * Custom Vilela backend encode params of uri
 * @param v String
 * @return String
 */
export function doubleDecodeURI(v?: string) {
  if (typeof v !== "string") return v;
  return replaceAll(v, "%252F", "/");
}

/**
 * Check if uri exist (return true if OK)
 * @param uri String
 * @return Boolean
 */
export function uriExists(uri: string) {
  if (!uri) return false;

  const http = new XMLHttpRequest();

  http.open("GET", uri, false);
  http.send();

  return http.status < 400;
}

/**
 * Check if uri exist (return uri if OK)
 * @param uri String
 * @return String
 */
export function validateUri(uri: string) {
  try {
    return uriExists(uri) ? uri : undefined;
  } catch {
    return uri;
  }
}

/**
 * Return file object from base64 data url
 * @param dataUrl String
 * @param filename String
 * @return File
 */
export function base64UrlToFile(dataUrl: string, filename: string) {
  if (!dataUrl) return undefined;

  const arr = dataUrl.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[arr.length - 1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

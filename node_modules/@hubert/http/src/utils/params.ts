import {
  doubleEncodeURI,
  parseStr,
  replaceAll,
  simpleEncodeURI,
} from "@vilela/shared";

/**
 * Serialize parameters to string (array separate by comma)
 * @param params Object
 * @return string
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function paramsSerializer<T extends object = any>(
  params?: T,
  configs?: {
    customSerializer?: (params: T) => string;
    withQuestionMark?: boolean;
    arrayRepeat?: boolean;
    noEncodeURI?: boolean;
    doubleEncodeURI?: boolean;
  }
) {
  if (!params) return "";
  if (configs?.customSerializer) return configs.customSerializer(params);

  let result = configs?.withQuestionMark ? "?" : "";

  result += Object.keys(params).reduce((qs, key) => {
    const value = params[key];
    if (value === undefined || value === "") {
      return qs;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return qs;
      }
      if (configs?.arrayRepeat) {
        return `${qs ? `${qs}&` : ""}${value
          .map(
            (x) =>
              `${key}=${
                configs?.noEncodeURI
                  ? x
                  : configs?.doubleEncodeURI
                  ? doubleEncodeURI(x)
                  : simpleEncodeURI(x)
              }`
          )
          .join("&")}`;
      }
      return `${qs ? `${qs}&` : ""}${key}=${value
        .map((x) =>
          configs?.noEncodeURI
            ? x
            : configs?.doubleEncodeURI
            ? doubleEncodeURI(x)
            : simpleEncodeURI(x)
        )
        .join(",")}`;
    }
    return `${qs ? `${qs}&` : ""}${key}=${
      configs?.noEncodeURI
        ? value
        : configs?.doubleEncodeURI
        ? doubleEncodeURI(value)
        : simpleEncodeURI(value)
    }`;
  }, "");

  return result;
}

/**
 * Serialize parameters of url, return url changed
 * @param url String
 * @param params Object
 * @return string
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlParamsSerializer<T extends object = any>(
  url: string,
  params?: T,
  configs?: {
    customSerializer?: (url: string, params: T) => string;
    noEncodeURI?: boolean;
    doubleEncodeURI?: boolean;
  }
) {
  if (!params) return url;
  if (configs?.customSerializer) return configs.customSerializer(url, params);

  return params
    ? Object.keys(params).reduce(
        (acc, key) =>
          replaceAll(
            acc,
            `{${key}}`,
            configs?.noEncodeURI
              ? params[key]
              : configs?.doubleEncodeURI
              ? doubleEncodeURI(params[key])
              : simpleEncodeURI(params[key])
          ),
        url
      )
    : url;
}

function parseParamsValue(v?: string) {
  if (!v) return "";
  if (v === "true") return true;
  if (v === "false") return false;
  if (v[0] === "0") return v;
  if (v.length > 7) return v;
  if (Number(v)) return Number(v);
  return v;
}

/**
 * Build parameters of url object/String to object (array separate by comma)
 * Standalone, util for controllers (router.query)
 * @param params Object/String
 * @return Object
 */
export function paramsBuilder<T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any,
  configs?: {
    ignoresFormat?: boolean | (keyof T)[];
  }
): T {
  if (!params) return {} as T;

  if (typeof params === "string") {
    return params
      .replace("?", "")
      .split("&")
      .reduce((acc, x) => {
        const [key, value] = x.split("=");
        if (!value) return acc;
        const ignore = Array.isArray(configs?.ignoresFormat)
          ? configs?.ignoresFormat?.some((x) => x === key)
          : configs?.ignoresFormat;

        if (value.includes(",")) {
          acc[key] = value
            .split(",")
            .map((x) => (ignore ? x : parseParamsValue(x)));
        } else {
          acc[key] = ignore ? value : parseParamsValue(value);
        }
        return acc;
      }, {} as T);
  }

  return Object.keys(params).reduce((acc, key) => {
    const value = parseStr(params[key]);
    if (!value) return acc;
    const ignore = Array.isArray(configs?.ignoresFormat)
      ? configs?.ignoresFormat?.some((x) => x === key)
      : configs?.ignoresFormat;

    if (value.includes(",")) {
      acc[key] = value
        .split(",")
        .map((x) => (ignore ? x : parseParamsValue(x)));
    } else {
      acc[key] = ignore ? value : parseParamsValue(value);
    }
    return acc;
  }, {} as T);
}

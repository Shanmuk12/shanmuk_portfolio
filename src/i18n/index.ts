export const defaultLocale = "en";
export const locales = ["en", "pt"] as const;
export type ValidLocale = typeof locales[number];

/**Ref: https://dev.to/ajones_codes/the-ultimate-guide-to-internationalization-i18n-in-nextjs-13-ed0 */

type PathnameLocale = {
  pathname: string;
  locale?: never;
};
type ISOLocale = {
  pathname?: never;
  locale: string;
};

type LocaleSource = PathnameLocale | ISOLocale;

export type Translator = (key: string, params?: {
  [key: string]: string | number;
}) => string;

export const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
  if (locale) {
    const localeParts = locale.toLowerCase().split("-");
    return {
      lang: localeParts[0],
      // country: localeParts[1],
    };
  } else {
    const pathnameParts = pathname!.toLowerCase().split("/");
    return {
      lang: pathnameParts[1],
      // country: pathnameParts[2],
    };
  };
};

export const dictionaries: Record<ValidLocale, any> = {
  "en": () =>
    import("../dictionaries/en.json").then((module) => module.default),
  "pt": () =>
    import("../dictionaries/pt.json").then((module) => module.default),
} as const;

export const getTranslator = (dictionary): Translator => {
  return (key: string, params?: { [key: string]: string | number }): string => {
    let translation: string = key
      .split(".")
      .reduce((obj, key) => obj && obj[key], dictionary);
    if (!translation) {
      return key;
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value));
      });
    }
    return translation;
  };
};

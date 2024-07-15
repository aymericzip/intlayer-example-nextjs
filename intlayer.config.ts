import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.SPANISH, Locales.FRENCH],
    defaultLocale: Locales.ENGLISH,
  },
  editor: {
    enabled: true,
  },
};

export default config;

/* eslint-disable */
import { Locales } from 'intlayer'
import type { ServerComponentContent as _AIYZOyPBgPL7MWQnjRCn } from '../.intlayer/types/server-component.d.ts';
import type { ClientComponentContent as _S5Y0R9JDBjRzxk5E9TfG } from '../.intlayer/types/client-component.d.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "server-component": _AIYZOyPBgPL7MWQnjRCn;
    "client-component": _S5Y0R9JDBjRzxk5E9TfG;
  }

  type ConfigLocales = Locales.ENGLISH | Locales.SPANISH | Locales.FRENCH;
  type ExtractedLocales = Extract<Locales, ConfigLocales>;
  type ExcludedLocales = Exclude<Locales, ConfigLocales>;

  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}
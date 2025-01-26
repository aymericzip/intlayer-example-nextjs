/* eslint-disable */
import { Locales } from 'intlayer';
import type { ClientComponentContent as _LeNgkm3Kb6AqmJ5oRQ0E } from '../.intlayer/types/client-component.d.ts';
import type { ServerComponentContent as _ycgrtza0KF1tWx3j36Sc } from '../.intlayer/types/server-component.d.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "client-component": _LeNgkm3Kb6AqmJ5oRQ0E;
    "server-component": _ycgrtza0KF1tWx3j36Sc;
  }

  type ConfigLocales = Locales.ENGLISH | Locales.SPANISH | Locales.FRENCH;
  type ExtractedLocales = Extract<Locales, ConfigLocales>;
  type ExcludedLocales = Exclude<Locales, ConfigLocales>;

  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}
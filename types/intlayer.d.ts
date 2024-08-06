/* eslint-disable */
import { Locales } from 'intlayer'
import type { ServerComponentContent as _JTtwNuFkrq9Nsh7bwtkZ } from '../.intlayer/types/server-component.d.ts';
import type { ClientComponentContent as _Zm96kvxdwOPEzKC0mAyz } from '../.intlayer/types/client-component.d.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "server-component": _JTtwNuFkrq9Nsh7bwtkZ;
    "client-component": _Zm96kvxdwOPEzKC0mAyz;
  }

  type ConfigLocales = Locales.ENGLISH | Locales.SPANISH | Locales.FRENCH;
  type ExtractedLocales = Extract<Locales, ConfigLocales>;
  type ExcludedLocales = Exclude<Locales, ConfigLocales>;

  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}
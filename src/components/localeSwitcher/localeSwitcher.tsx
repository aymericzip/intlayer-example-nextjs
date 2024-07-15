"use client";

import { Locales } from "intlayer";
import { useLocale } from "next-intlayer";
import { FC } from "react";

export const LocaleSwitcher: FC = () => {
  const { setLocale } = useLocale();

  return (
    <div className="flex flex-col items-start justify-start gap-4 text-left w-full">
      <button
        className="text-blue-300 underline"
        onClick={() => setLocale(Locales.ENGLISH)}
      >
        Switch to english
      </button>

      <button
        className="text-blue-300 underline"
        onClick={() => setLocale(Locales.FRENCH)}
      >
        Switch to french
      </button>

      <button
        className="text-blue-300 underline "
        onClick={() => setLocale(Locales.SPANISH)}
      >
        Switch to spanish
      </button>
    </div>
  );
};

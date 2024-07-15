"use client";

import { useIntlayer } from "next-intlayer";

export const ClientComponent = () => {
  const { test } = useIntlayer("client-component");

  return (
    <div className="rounded bg-slate-800 p-5 text-center w-full">
      <h1 className="bold text-2xl">Client component:</h1>
      <span>{test}</span>
    </div>
  );
};

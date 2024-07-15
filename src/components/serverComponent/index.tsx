import { useIntlayer } from "next-intlayer/server";

export const ServerComponent = () => {
  const { test } = useIntlayer("server-component");

  return (
    <div className="rounded bg-slate-800 p-5 text-center w-full">
      <h1 className="bold text-2xl">Server component:</h1>
      <span>{test}</span>
    </div>
  );
};

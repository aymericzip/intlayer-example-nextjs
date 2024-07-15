import { DeclarationContent, t } from "intlayer";
import React, { ReactNode } from "react";

const clientComponentContent: DeclarationContent = {
  id: "client-component",
  test: t<ReactNode>({
    en: <p>Hello World</p>,
    fr: <p>Bonjour le monde</p>,
    es: <p>Hola Mundo</p>,
  }),
};

export default clientComponentContent;

import { DeclarationContent, t } from "intlayer";
import React, { ReactNode } from "react";

const clientComponentContent: DeclarationContent = {
  key: "client-component",
  content: {
    test: t<ReactNode>({
      en: <p>Hello World</p>,
      fr: <p>Bonjour le monde</p>,
      es: <p>Hola Mundo</p>,
    }),
  },
};

export default clientComponentContent;

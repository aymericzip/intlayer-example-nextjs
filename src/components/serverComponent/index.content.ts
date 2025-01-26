import { DeclarationContent, t } from "intlayer";

const serverComponentContent: DeclarationContent = {
  key: "server-component",
  content: {
    test: t({
      en: "Hello World",
      fr: "Bonjour le monde",
      es: "Hola Mundo",
    }),
  },
};

export default serverComponentContent;

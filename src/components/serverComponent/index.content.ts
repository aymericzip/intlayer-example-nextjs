import { DeclarationContent, t } from "intlayer";

const serverComponentContent: DeclarationContent = {
  id: "server-component",
  test: t({
    en: "Hello World",
    fr: "Bonjour le monde",
    es: "Hola Mundo",
  }),
};

export default serverComponentContent;

import PageContent from "@/components/pageContent/PageContent";
import { IntlayerClientProvider, NextPageIntlayer } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";

const Home: NextPageIntlayer = ({ params: { locale } }) => (
  <IntlayerClientProvider locale={locale}>
    <IntlayerServerProvider locale={locale}>
      <PageContent />
    </IntlayerServerProvider>
  </IntlayerClientProvider>
);

export default Home;

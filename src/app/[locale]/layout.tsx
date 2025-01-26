import { NextLayoutIntlayer } from "next-intlayer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default LocaleLayout;

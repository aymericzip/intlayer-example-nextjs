import { NextLayoutIntlayer } from "next-intlayer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const LocaleLayout: NextLayoutIntlayer = ({ children, params: { locale } }) => {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default LocaleLayout;

import { Html, Head, Main, NextScript } from "next/document";
import { useLocale } from "@/contexts/LocaleContext";

export default function Document() {
  const locale = useLocale();
  return (
    <Html lang={locale}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="language" content={locale} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

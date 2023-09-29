import "@/styles/_global.scss";
import type { AppProps } from "next/app";

import { LocaleProvider } from "@/contexts/LocaleContext";
import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LocaleProvider>
  );
}

import styles from "../styles/Home.module.scss";

import Head from "next/head";

import { usePagesTitle, useMetaTags } from "../hooks/useTranslations";

import { LanguagePicker } from "@/components/LanguagePicker";

export default function Contact() {
  const pagesTitle = usePagesTitle();
  const metaTags = useMetaTags();

  return (
    <>
      <Head>
        <title>{pagesTitle.contact}</title>
        <meta name="description" content={metaTags.homeDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeContainer}>
        <LanguagePicker />

        <section className={styles.hero}>
          <h1>Coming soon..</h1>
        </section>
      </div>
    </>
  );
}

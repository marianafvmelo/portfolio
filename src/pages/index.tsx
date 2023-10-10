import styles from "@/styles/Home.module.scss";

import Head from "next/head";
import Image from "next/image";

import developerIllustration from "@/assets/images/dev.png";
import caricature from "@/assets/images/caricature.png";
import lhma from "@/assets/images/lhma.jpg";
import tavern from "@/assets/images/tavern.jpg";
import portfolio from "@/assets/images/portfolio.jpg";

import {
  usePagesTitle,
  useMetaTags,
  useHomeWelcomeSection,
  useHomeAboutSection,
  useHomeProjectsSection,
} from "@/hooks/useTranslations";

import { useLocale } from "@/contexts/LocaleContext";

import Link from "next/link";

import { Card } from "@/components/Card";
import { LanguagePicker } from "@/components/LanguagePicker";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    title: {
      pt: "Lhma Serviços Digitais",
      en: "Lhma Digital Services",
    },
    description: {
      pt: "Website para uma empresa focada em prestar serviços utilizando Power Platform e em Desenvolvimento de Sites.",
      en: "Website for a company focused on providing services using Power Platform and Website Development.",
    },
    linkPreview: "https://lhma.netlify.app",
    linkRepositorie: "",
    src: lhma,
    color: "#1F1B32",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: {
      pt: "Portfólio",
      en: "Portfolio",
    },
    description: {
      pt: "Meu portfolio.",
      en: "My portfolio",
    },
    linkPreview: "",
    linkRepositorie: "https://github.com/marianafvmelo/portfolio",
    src: portfolio,
    color: "#E3DDD8",
    tags: ["Next.js", "SCSS", "TypeScript"],
  },
  {
    title: {
      pt: "Taverna do Levain",
      en: "Levain's Tavern",
    },
    description: {
      pt: "Meu primeiro website desenvolvido para uma padaria de fermentação natural no estilo medieval. Atualmente, está passando por um processo de refatoração e atualização, utilizando novas tecnologias e aplicando melhorias para aprimorar a experiência do usuário e performance do site.",
      en: "My first website developed for a natural fermentation bakery in a medieval style. Currently, it is in a process of refactoring and updating, using new technologies and implementing improvements to enhance the user experience and website performance.",
    },
    linkPreview: "",
    linkRepositorie: "",
    src: tavern,
    color: "#1D1F1E",
    tags: ["HTML", "CSS"],
  },
];

export default function Home() {
  const pagesTitle = usePagesTitle();
  const metaTags = useMetaTags();
  const welcomeSection = useHomeWelcomeSection();
  const aboutSection = useHomeAboutSection();
  const projectsSection = useHomeProjectsSection();

  const { currentLocale } = useLocale();

  return (
    <>
      <Head>
        <title>{pagesTitle.home}</title>
        <meta name="description" content={metaTags.homeDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeContainer}>
        <LanguagePicker />

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              <div>{welcomeSection.title.firstLine}</div>
              <div>{welcomeSection.title.secondLine}</div>
            </h1>

            <p>
              <strong>{welcomeSection.paragraph}</strong>
            </p>
          </div>

          <div className={styles.heroImg}>
            <Image
              src={developerIllustration}
              alt="Developer Illustration"
              width={537}
              height={359}
              placeholder="blur"
              blurDataURL="../assets/images/dev.png"
            />
          </div>
        </section>

        <section className={styles.about}>
          <Reveal>
            <div className={styles.aboutImg}>
              <Image
                src={caricature}
                alt="Caricature"
                width={350}
                height={350}
              />
            </div>
          </Reveal>

          <div className={styles.aboutContent}>
            <Reveal>
              <h2>{aboutSection.title}</h2>
            </Reveal>
            <Reveal>
              <p>{aboutSection.paragraph}</p>
            </Reveal>
            <Reveal>
              <Link href="/about">
                <span>{aboutSection.linkText}</span>
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </section>

        <section className={styles.projects}>
          <Reveal>
            <h2>{projectsSection.title}</h2>
          </Reveal>

          <div className={styles.cardsWrapper}>
            {projects.map((project) => (
              <Card
                key={project.linkPreview}
                title={project.title[currentLocale as "en" | "pt"]}
                description={project.description[currentLocale as "en" | "pt"]}
                linkPreview={project.linkPreview}
                linkRepositorie={project.linkRepositorie}
                src={project.src}
                tags={project.tags}
              />
            ))}
          </div>
        </section>

        <section className={styles.contact} />
      </div>
    </>
  );
}

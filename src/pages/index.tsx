import styles from "../styles/Home.module.scss";

import Head from "next/head";
import Image from "next/image";

import developerIllustration from "../assets/images/dev.png";
import caricature from "../assets/images/caricature.png";
import lhma from "../assets/images/lhma.jpg";
import tavern from "../assets/images/tavern.jpg";
import portfolio from "../assets/images/portfolio.jpg";

import {
  usePagesTitle,
  useMetaTags,
  useHomeWelcomeSection,
  useHomeAboutSection,
  useHomeProjectsSection,
} from "../hooks/useTranslations";

import Link from "next/link";

import { Card } from "@/components/Card";
import { LanguagePicker } from "@/components/LanguagePicker.1";

const projects = [
  {
    title: "Lhma",
    description:
      "Website para uma startup de serviços digitais, focada em power apps, power automate.",
    linkPreview: "https://lhma.netlify.app",
    linkRepositorie: "",
    src: lhma,
    color: "#1F1B32",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Taverna do Levain",
    description:
      "Website de uma padaria de fermentação natural no estilo medieval.",
    linkPreview: "https://lhma.netlify.app",
    linkRepositorie: "https://lhma.netlify.app",
    src: tavern,
    color: "#1D1F1E",
    tags: ["React", "CSS"],
  },
  {
    title: "Portfolio",
    description: "Meu portfolio.",
    linkPreview: "",
    linkRepositorie: "https://lhma.netlify.app",
    src: portfolio,
    color: "#E3DDD8",
    tags: ["Next.js", "SCSS", "TypeScript"],
  },
];

export default function Home() {
  const pagesTitle = usePagesTitle();
  const metaTags = useMetaTags();
  const welcomeSection = useHomeWelcomeSection();
  const aboutSection = useHomeAboutSection();
  const projectsSection = useHomeProjectsSection();

  return (
    <>
      <Head>
        <title>{pagesTitle.home} | Mariana Melo</title>
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
              fill
              sizes="(min-width: 56.25em) 50vw, 100vw"
            />
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.aboutImg}>
            <Image
              src={caricature}
              alt="Caricature"
              fill
              sizes="(min-width: 56.25em) 50vw, 100vw"
            />
          </div>
          <div className={styles.aboutContent}>
            <h2>{aboutSection.title}</h2>
            <p>{aboutSection.paragraph}</p>
            <Link href="/about">
              <span>{aboutSection.linkText}</span>
              <svg viewBox="0 0 13 20">
                <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
              </svg>
            </Link>
          </div>
        </section>

        <section className={styles.projects}>
          <h2>{projectsSection.title}</h2>
          <div className={styles.cardsWrapper}>
            {projects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                linkPreview={project.linkPreview}
                linkRepositorie={project.linkRepositorie}
                src={project.src}
                tags={project.tags}
              />
            ))}
          </div>
        </section>

        <section className={styles.contact}></section>
      </div>
    </>
  );
}

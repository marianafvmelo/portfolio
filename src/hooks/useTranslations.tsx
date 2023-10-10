import { useLocale } from "@/contexts/LocaleContext";

import enTranslations from "../translations/en.json";
import ptTranslations from "../translations/pt.json";

interface IMetaTags {
  homeDescription: string;
}

interface IPagesTitle {
  home: string;
  about: string;
  portfolio: string;
  contact: string;
}

interface IToggle {
  open: string;
  close: string;
}

interface IElementsTitle {
  navToggle: IToggle;
  switchLanguage: IToggle;
}

interface ILocale {
  code: string;
  name: string;
}

interface IDownloadResume {
  text: string;
  link: string;
}

interface INavLink {
  name: string;
  path: string;
}

interface IHomeWelcomeTitle {
  firstLine: string;
  secondLine: string;
}

interface IHomeWelcome {
  title: IHomeWelcomeTitle;
  paragraph: string;
}

interface IHomeAbout {
  title: string;
  paragraph: string;
  linkText: string;
}

interface IHomeProjects {
  title: string;
}

interface IFooter {
  createdBy: string;
  rights: string;
}

interface ITranslations {
  pagesTitle: IPagesTitle;
  metaTags: IMetaTags;
  elementsTitle: IElementsTitle;
  languages: ILocale[];
  downloadResume: IDownloadResume;
  navLinks: INavLink[];
  homeWelcome: IHomeWelcome;
  homeAbout: IHomeAbout;
  homeProjects: IHomeProjects;
  footer: IFooter;
}

export function useTranslations(): ITranslations {
  const { currentLocale } = useLocale();

  const translations: Record<string, ITranslations> = {
    en: enTranslations,
    pt: ptTranslations,
  };

  return translations[currentLocale];
}

export const usePagesTitle = () => useTranslations().pagesTitle;

export const useMetaTags = (): IMetaTags => useTranslations().metaTags;

export const useElementsTitle = (): IElementsTitle =>
  useTranslations().elementsTitle;

export const useLanguages = (): ILocale[] => useTranslations().languages;

export const useDownloadResume = (): IDownloadResume =>
  useTranslations().downloadResume;

export const useNavLinks = (): INavLink[] => useTranslations().navLinks;

export const useHomeWelcomeSection = (): IHomeWelcome =>
  useTranslations().homeWelcome;

export const useHomeAboutSection = (): IHomeAbout =>
  useTranslations().homeAbout;

export const useHomeProjectsSection = (): IHomeProjects =>
  useTranslations().homeProjects;

export const useFooter = (): IFooter => useTranslations().footer;

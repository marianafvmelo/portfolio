import styles from "../styles/Footer.module.scss";

import Link from "next/link";

import { GithubIconTiny, LinkedinIcon } from "./SVGs/Icons";

import { useFooter } from "@/hooks/useTranslations";

export const Footer = () => {
  const footerTranslation = useFooter();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>{footerTranslation.createdBy}</p>
        <p>
          © {new Date().getFullYear()}. {footerTranslation.rights}
        </p>

        <div className={styles.socialMedia}>
          <Link href="https://www.github.com/marianafvmelo">
            <GithubIconTiny />
          </Link>
          <Link href="https://www.linkedin.com/in/marianafvmelo/">
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

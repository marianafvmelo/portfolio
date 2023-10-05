import styles from "../styles/Header.module.scss";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { useScrollLock } from "../hooks/useScrollLock";
import {
  useElementsTitle,
  useDownloadResume,
  useNavLinks,
} from "../hooks/useTranslations";

import { GithubIconTiny, LinkedinIcon } from "./SVGs/Icons";

import { Button } from "./Button";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const navRef = useRef<HTMLButtonElement>(null);

  const downloadResume = useDownloadResume();
  const navLinks = useNavLinks();
  const elementsTitle = useElementsTitle();

  const currentRoute = usePathname();

  useScrollLock(isActive);

  useEffect(() => {
    if (navRef.current && isActive) {
      const navElement = navRef.current;

      const focusableElements = Array.from(
        navElement.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ) as HTMLElement[];
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
          ) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsActive(false);
        }
      };

      navElement.addEventListener("keydown", handleTabKeyPress);
      navElement.addEventListener("keydown", handleEscapeKeyPress);

      return () => {
        navElement.removeEventListener("keydown", handleTabKeyPress);
        navElement.removeEventListener("keydown", handleEscapeKeyPress);
      };
    }
  }, [isActive]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Button
          text={downloadResume.text}
          link={downloadResume.link}
          download={true}
          target="_blank"
          primary
        />

        <div>
          <nav ref={navRef}>
            <button
              id="navToggle"
              className={styles.mainNavToggle}
              title={elementsTitle.navToggle[isActive ? "close" : "open"]}
              aria-controls="primaryNavigation"
              aria-expanded={isActive}
              onClick={() => setIsActive(!isActive)}
            >
              <span className="hidden">Menu</span>

              <span className={styles.hamburgerIcon}>
                <span className={`${styles.part} ${styles.top}`} />
                <span className={`${styles.part} ${styles.middle}`} />
                <span className={`${styles.part} ${styles.bottom}`} />
              </span>
            </button>

            <ul
              id="primaryNavigation"
              className={isActive ? styles.isActive : ""}
            >
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={currentRoute === link.path ? styles.active : ""}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="https://www.github.com/marianafvmelo"
                  target="_blank"
                >
                  <GithubIconTiny />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/marianafvmelo/"
                  target="_blank"
                >
                  <LinkedinIcon />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

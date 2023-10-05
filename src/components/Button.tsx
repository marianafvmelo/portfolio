import styles from "../styles/Button.module.scss";

import Link from "next/link";

interface IButtonProps {
  link?: string;
  target?: string;
  text: string;
  icon?: JSX.Element;
  download?: boolean;
  primary?: boolean;
}

export const Button = ({
  link,
  target,
  text,
  icon,
  download = false,
  primary,
}: IButtonProps) => {
  return (
    <>
      {link ? (
        <Link
          href={link}
          target={target}
          className={`${styles.button} ${
            primary ? styles.primary : styles.secondary
          }`}
          download={download}
        >
          <span>{text}</span>
          {icon && icon}
        </Link>
      ) : (
        <button
          className={`${styles.button} ${
            primary ? styles.primary : styles.secondary
          }`}
        >
          <span>{text}</span>
          {icon && icon}
        </button>
      )}
    </>
  );
};

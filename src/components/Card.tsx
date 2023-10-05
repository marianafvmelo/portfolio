import styles from "../styles/Card.module.scss";

import Image, { StaticImageData } from "next/image";

import { ArrowDiagonalUp, GithubIcon } from "./SVGs/Icons";
import { Tag } from "./Tag";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

interface ICard {
  title: string;
  description: string;
  linkPreview: string;
  linkRepositorie: string;
  src: string | StaticImageData;
  tags?: string[];
}

export const Card = ({
  title,
  description,
  linkPreview,
  linkRepositorie,
  src,
  tags,
}: ICard) => {
  return (
    <Reveal customClass={styles.card}>
      <div className={styles.cardWrapper}>
        <figure>
          <Image src={src} alt="" />
        </figure>

        <div className={styles.cardBody}>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          <div className={styles.cardFooter}>
            <div className={styles.tags}>
              {tags && tags.map((tag) => <Tag key={tag} name={tag} />)}
            </div>

            <div className={styles.links}>
              {linkPreview && (
                <Button
                  text="Preview"
                  link={linkPreview}
                  target="_blank"
                  icon={<ArrowDiagonalUp />}
                />
              )}
              {linkRepositorie && (
                <Button
                  text="Github"
                  link={linkRepositorie}
                  target="_blank"
                  icon={<GithubIcon />}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

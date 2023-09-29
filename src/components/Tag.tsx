import styles from "../styles/Tag.module.scss";

interface ITag {
  name: string;
}

export const Tag = ({ name }: ITag) => {
  return <span className={styles.tag}>{name}</span>;
};

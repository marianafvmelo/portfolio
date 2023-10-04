import styles from "../styles/Animatable.module.scss";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimatableProps {
  children: React.ReactNode;
  key?: string;
  card?: boolean;
}

export const Animatable = ({ children, key, card }: AnimatableProps) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.35,
    executeOnce: true,
  });

  const addInitial = !entry?.isIntersecting;

  return (
    <div
      key={key}
      ref={ref}
      className={`${styles.animatable} ${
        card ? styles.cardAnimatable : styles.regularAnimatable
      } ${addInitial ? styles.animatableInitial : ""}`.trim()}
    >
      {children}
    </div>
  );
};

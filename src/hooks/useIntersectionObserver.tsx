import { useEffect, useRef, useState } from "react";

type ReturnType = [
  (element: Element | null) => void,
  IntersectionObserverEntry | null,
];

interface Options extends IntersectionObserverInit {
  executeOnce?: boolean;
}

export const useIntersectionObserver = ({
  root = null,
  rootMargin = "0%",
  threshold = 0,
  executeOnce = false,
}: Options): ReturnType => {
  const [ref, setRef] = useState<Element | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const hasExecuted = useRef(false);

  useEffect(() => {
    if (
      !ref ||
      !window.IntersectionObserver ||
      (executeOnce && hasExecuted.current)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);

        if (entry.isIntersecting && executeOnce) {
          observer.disconnect();
          hasExecuted.current = true;
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, JSON.stringify(threshold), ref, executeOnce]);

  return [setRef, entry];
};

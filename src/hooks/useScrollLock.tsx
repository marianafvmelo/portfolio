import { useEffect } from "react";

export const useScrollLock = (isActive: boolean) => {
  useEffect(() => {
    if (isActive) {
      const scrollY = window.scrollY;
      const body = document.body;

      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;

      return () => {
        body.style.position = "";
        body.style.top = "";

        window.scrollTo(0, scrollY);
      };
    }
  }, [isActive]);
};

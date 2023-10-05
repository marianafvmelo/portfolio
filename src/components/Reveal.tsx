import React, { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

interface IRevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  customClass?: string;
}

export const Reveal = ({ children, width, customClass }: IRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
      className={customClass ? customClass : ""}
    >
      <motion.div
        style={{ height: "100%" }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#46423e",
          zIndex: 20,
        }}
      />
    </div>
  );
};

// src/components/ui/Reveal.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Reveal = ({ children, delay = 0, direction = "up" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.2,    // % of element visible before animating
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

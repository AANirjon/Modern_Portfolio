// components/ScrollReveal.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollReveal = ({ children, delay= 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2,    // % of element visible before triggering
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false); // closes menu after clicking

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        AAN Portfolio
      </motion.div>

      {/* Nav Links */}
      <motion.ul
        id="navLinks"
        className={`nav-links ${isOpen ? "show" : ""}`}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        aria-hidden={!isOpen}
      >
        {["home", "projects", "contact", "tools"].map((item) => (
          <motion.li
            key={item}
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={`#${item}`} onClick={handleLinkClick}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Hamburger Button */}
      <button
        className="hamburger"
        onClick={handleToggle}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="navLinks"
      >
        &#9776;
      </button>
    </motion.nav>
  );
};

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import Tools from "./components/Tools";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  // const [isLoaded, setIsLoaded] = useState(false);
  const [step, setStep] = useState(0);


  // Email Pas key
  useEffect(() => {
    // setIsLoaded(true);
    emailjs.init("3RjbCPl6pxuy5RJ-C");
  }, []);

  // For Animation as pre loding
  useEffect(() => {
    // Step 0 -> 1 after 2s
    setTimeout(() => setStep(1), 2000);
    // Step 1 -> 2 after 4s
    setTimeout(() => setStep(2), 4000);
    // Step 2 -> 3 after 7s
    setTimeout(() => setStep(3), 7000);
  }, []);

  // Typing effect text
  const typingText = "const aan = 'Coding with Passion 🚀';";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (step === 2) {
      let i = 0;
      const interval = setInterval(() => {
        setTyped(typingText.slice(0, i));
        i++;
        if (i > typingText.length) clearInterval(interval);
      }, 100);
    }
  }, [step]);


  return (
    // <div className={`app ${isLoaded ? "loaded" : ""}`}>
    <div className="bg-gray-900 text-white min-h-screen">
      <AnimatePresence>
        {step < 3 ? (
          <motion.div
            key="loader"
            className="loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {step === 0 && (
              <motion.h1
                className="loader-text main-title"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Welcome to <span className="highlight">AAN World</span>
              </motion.h1>
            )}

            {step === 1 && (
              <motion.h2
                className="loader-text subtitle"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Passionate Web Developer
              </motion.h2>
            )}

            {step === 2 && (
              <motion.pre
                className="code-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {typed}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  |
                </motion.span>
              </motion.pre>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 2, y: 0 }}
            transition={{ duration: 2 }}
          >
            <Navbar />
            <Hero />
            <ScrollReveal delay={0.2}>
              <Projects />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Contact />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Tools />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Footer />
            </ScrollReveal>
            <ScrollToTop></ScrollToTop>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

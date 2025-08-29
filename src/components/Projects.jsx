import { motion } from "framer-motion";
import { FaBootstrap, FaCss3, FaDatabase, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoLogoFirebase } from "react-icons/io5";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/project_1.PNG')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Restaurant App</h3>
          <p>
          A full-stack restaurant website built with the MERN stack, featuring a fully integrated backend. Firebase is used for authentication, while Tailwind CSS and DaisyUI are implemented for modern and responsive styling. 
          </p>
          <div className="project-tech">
            <span><FaReact/> React.js</span>
            <span><FaDatabase/>MongoDB</span>
            <span><RiTailwindCssFill/> TailwindCSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/project_weather.PNG')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Live Weather App</h3>
          <p>
          A dynamic Weather Application built with HTML and CSS, providing real-time weather updates by integrating external APIs. There also a search box. The app features a user-friendly interface styled with vanilla CSS, ensuring responsiveness across all devices.
          </p>
          <div className="project-tech">
            <span><FaHtml5/> HTML</span>
            <span><FaCss3/> CSS</span>
            <span><TiWeatherPartlySunny /> Weather API</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/project_e-learning.PNG')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Easy Learning Webapp</h3>
          <p>
          Easy Learning is a full-stack e-learning website built with the MERN stack, offering a smooth and interactive online education experience. The platform includes secure Firebase authentication, course browsing, and a fully responsive design styled with Bootstrap for a clean and modern look.
          </p>
          <div className="project-tech">
            <span><FaReact/> React.js</span>
            <span><IoLogoFirebase /> Firebase</span>
            <span><FaBootstrap/> Bootstrap</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

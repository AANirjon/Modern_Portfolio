import { useState, useEffect } from "react";
import "./Footer.css"; // import the CSS below
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About / Logo */}
                <div className="footer-section">
                    <h2 className="footer-logo">Ahnaf Asad Nirjon || Portfolio</h2>
                    <p>I craft visually stunning and highly interactive web applications using React and modern CSS. With strong expertise in JavaScript and full-stack technologies including Node.js, Express.js, MongoDB, and Firebase, I build seamless, dynamic, and scalable applications that provide exceptional user experiences from front-end to back-end.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#tools">Tools</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Social / Contact */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li><MdEmail className="logo-des"/><a href="ahnaf.asad1413@gmail.com">Email</a></li>
                        <li><FaLinkedin className="logo-des"/><a href="www.linkedin.com/in/ahnaf-asad-nirjon-7958631b2">LinkedIn</a></li>
                        <li><FaGithub className="logo-des"/><a href="https://github.com/AANirjon">GitHub</a></li>
                    </ul>
                    <p className="footer-time">{time.toLocaleTimeString()}</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

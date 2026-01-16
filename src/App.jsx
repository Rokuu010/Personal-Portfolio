// src/App.jsx
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GlitchBackground from './components/GlitchBackground';
import BlueprintBackground from './components/BlueprintBackground';
import MatrixBackground from './components/MatrixBackground';

function App() {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const about = document.getElementById('about');
        const projects = document.getElementById('projects');
        const contact = document.getElementById('contact'); // 👈 add contact

        const handleScroll = () => {
            // midpoint of viewport for smoother detection
            const y = window.scrollY + window.innerHeight / 2;

            if (contact && y >= contact.offsetTop) {
                setActiveSection('about');
            } else if (projects && y >= projects.offsetTop) {
                setActiveSection('projects');
            } else if (about && y >= about.offsetTop) {
                setActiveSection('about');
            } else {
                setActiveSection('hero');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const backgroundStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transition: 'opacity 1s ease-in-out',
    };

    return (
        <>
            {/* Background layers */}
            <div className="fixed top-0 left-0 w-full h-full z-0">
                <div style={{ ...backgroundStyle, opacity: activeSection === 'hero' ? 1 : 0 }}>
                    <GlitchBackground />
                </div>
                <div style={{ ...backgroundStyle, opacity: activeSection === 'about' ? 1 : 0 }}>
                    <BlueprintBackground />
                </div>
                <div style={{ ...backgroundStyle, opacity: activeSection === 'projects' ? 1 : 0 }}>
                    <MatrixBackground />
                </div>
            </div>

            {/* Each section wrapped with an ID so scrolling works */}
            <section id="hero">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </>
    );
}

export default App;

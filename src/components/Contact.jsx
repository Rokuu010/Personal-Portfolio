// src/components/Contact.jsx
import BlueprintBackground from './BlueprintBackground';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useCallback } from 'react';

function Contact() {
    const sectionStyle = {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '2rem',
        position: 'relative',
        scrollSnapAlign: 'start',
    };

    const containerStyle = {
        textAlign: 'center',
        maxWidth: '40rem',
        zIndex: 2,
    };

    const headingStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        color: '#FFD700',
    };

    const paragraphStyle = {
        fontSize: '1.2rem',
        color: '#d1d5db',
        marginBottom: '3rem',
        lineHeight: 1.6,
    };

    const linksStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '2.5rem',
        fontSize: '2.2rem',
    };

    const iconStyle = {
        color: '#FFD700',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    };

    const hoverEffect = (e, isHover) => {
        if (isHover) {
            e.target.style.color = '#FFEE80';
            e.target.style.transform = 'scale(1.2)';
        } else {
            e.target.style.color = '#FFD700';
            e.target.style.transform = 'scale(1)';
        }
    };

    const handleMouseEnter = useCallback((e) => hoverEffect(e, true), []);
    const handleMouseLeave = useCallback((e) => hoverEffect(e, false), []);

    return (
        <section id="contact" style={sectionStyle}>
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                <BlueprintBackground />
            </div>

            <div style={containerStyle}>
                <h2 style={headingStyle}>Contact Me</h2>
                <p style={paragraphStyle}>
                    I’m always open to discussing internships, collaborations, or new opportunities.
                    Feel free to reach out through any of the platforms below:
                </p>

                <div style={linksStyle}>
                    <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope
                            style={iconStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin
                            style={iconStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </a>
                    <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                        <FaGithub
                            style={iconStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;

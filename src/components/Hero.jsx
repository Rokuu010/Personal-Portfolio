// src/components/Hero.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import MatrixName from './MatrixName';
import GlitchBackground from './GlitchBackground';

function Hero() {
    return (
        <section className="h-screen flex items-start justify-start scroll-snap-align-start p-8 md:p-12 relative">

            {/* Added this div for the background */}
            <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                <GlitchBackground />
            </div>

            <div className="text-left">
                <MatrixName />

                <p
                    className="font-medium"
                    style={{
                        color: '#E5E7EB',
                        fontSize: '1.875rem',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    }}
                >
                    Aspiring ML/AI Engineer
                </p>

                <div className="mt-6 flex gap-6">
                    <a
                        href="YOUR_GITHUB_LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        style={{ color: '#D1D5DB' }}
                    >
                        <FaGithub size={32} />
                    </a>
                    <a
                        href="YOUR_LINKEDIN_LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        style={{ color: '#D1D5DB' }}
                    >
                        <FaLinkedin size={32} />
                    </a>
                </div>

                <div className="mt-10">
                    <a
                        href="#projects"
                        className="text-white bg-white/10 font-bold py-3 px-6 rounded border border-white/30 transition hover:bg-white/20"
                        style={{ textDecoration: 'none' }}
                    >
                        View My Projects
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
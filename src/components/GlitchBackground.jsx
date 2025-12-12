// src/components/GlitchBackground.jsx
import React, { useEffect } from 'react';
import './GlitchBackground.css';

function GlitchBackground() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const glitchElements = document.querySelectorAll('.glitch__img');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            glitchElements.forEach(el => {
                el.style.setProperty('--x', `${x * 100}%`);
                el.style.setProperty('--y', `${y * 100}%`);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="glitch"
            // This style ensures the section is opaque
            style={{ backgroundColor: 'black' }}
        >
            {/* Change the filename in all five of these lines */}
            <div className="glitch__img" style={{ backgroundImage: 'url(/GlitchIppo.jpg)' }}></div>
            <div className="glitch__img" style={{ backgroundImage: 'url(/GlitchIppo.jpg)' }}></div>
            <div className="glitch__img" style={{ backgroundImage: 'url(/GlitchIppo.jpg)' }}></div>
            <div className="glitch__img" style={{ backgroundImage: 'url(/GlitchIppo.jpg)' }}></div>
            <div className="glitch__img" style={{ backgroundImage: 'url(/GlitchIppo.jpg)' }}></div>
        </div>
    );
}

export default GlitchBackground;
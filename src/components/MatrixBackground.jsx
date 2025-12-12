// src/components/MatrixBackground.jsx
import React, { useEffect, useRef } from 'react';

function MatrixBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Use Japanese Katakana characters for an authentic feel, like Noisy Boy's text
        const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        function draw() {
            // Set the background to a deep purple with some transparency for the trail effect
            ctx.fillStyle = 'rgba(49, 29, 63, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Set the text color to gold/yellow
            ctx.fillStyle = '#FFD700';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        const interval = setInterval(draw, 33);
        return () => clearInterval(interval);
    }, []);

    // Set the initial solid background to the same deep purple
    return <div className="bg-[#311D3F] w-full h-full"><canvas ref={canvasRef} /></div>;
}

export default MatrixBackground;
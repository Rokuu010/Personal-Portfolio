// src/components/MatrixName.jsx
import React, { useEffect, useRef } from 'react';

function MatrixName() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const fontSize = 18;
        const letters =
            'アァカサタナハマヤャラワガザダバパイキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';

        let columns = 0;
        let drops = [];

        const mask = document.createElement('canvas');
        const maskCtx = mask.getContext('2d');

        const setCanvasSize = () => {
            const { width, height } = canvas.getBoundingClientRect();
            canvas.width = width;
            canvas.height = height;
            mask.width = width;
            mask.height = height;

            maskCtx.clearRect(0, 0, width, height);
            maskCtx.fillStyle = 'white';

            maskCtx.shadowColor = 'rgba(255,255,255,0.6)';
            maskCtx.shadowBlur = 8;

            maskCtx.font = 'bold 5.2rem sans-serif';
            maskCtx.textAlign = 'center';
            maskCtx.textBaseline = 'middle';
            maskCtx.fillText('Rohan Sehmbi', width / 2, height / 2);

            columns = Math.floor(width / fontSize);
            drops = Array(columns).fill(1);
        };
        setCanvasSize();

        const draw = () => {
            ctx.fillStyle = 'rgba(0,0,0,0.006)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#FFFFFF';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }

            ctx.globalCompositeOperation = 'destination-in';
            ctx.drawImage(mask, 0, 0);
            ctx.globalCompositeOperation = 'source-over';
        };

        const interval = setInterval(draw, 10);
        window.addEventListener('resize', setCanvasSize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                display: 'block',
                width: '100%',
                height: '300px',
                backgroundColor: 'transparent'
            }}
        />
    );
}

export default MatrixName;

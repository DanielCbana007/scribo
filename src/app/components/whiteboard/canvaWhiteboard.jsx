'use client' // --> ¿Por que?

import { useEffect, useRef, useState } from 'react';
import styles from './canvaWhiteboard.module.css'

function CanvaWhiteboard() {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const canvasRef = useRef(null);

    //--> ¿que?
    useEffect(() => {
        const resizeCanvas = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        return () => window.removeEventListener('resize', resizeCanvas)
    }, [])

    const write = (event) =>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ctx.fillstyle = 'red';
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI*2)
        ctx.fill();

        console.log(`Posición en el canvas: x: ${x}, y: ${y}`);
    }

    return (
        <>
            <canvas
                ref={canvasRef}
                onClick={write}
                className={styles.whiteboard}
                height={size.height}
                width={size.width}
            ></canvas>
        </>
    )
}

export default CanvaWhiteboard;
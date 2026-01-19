'use client' // --> ¿Por que?

import { useEffect, useRef, useState } from 'react';
import styles from './canvaWhiteboard.module.css'

function CanvaWhiteboard() {
    const [size, setSize] = useState({ width: 0, height: 0 })
    const canvasRef = useRef(null)

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

    return (
        <>
            <canvas
                ref={canvasRef}
                className={styles.whiteboard}
                height={size.height}
                width={size.width}
            ></canvas>
        </>
    )
}

export default CanvaWhiteboard;
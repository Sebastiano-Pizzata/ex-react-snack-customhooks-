import { useEffect, useState } from 'react'

export default function useCustomPointer(component) {
    const [pointer, setPointer] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handlePointer = event => {
            setPointer({ x: event.clientX, y: event.clientY })
        }

        document.addEventListener('mousemove', handlePointer)
        return () => document.removeEventListener('mousemove', handlePointer)
    }, [])

    return (
        <div
            style={{
                position: "fixed",
                top: pointer.y,
                left: pointer.x,
                transform: "translate(-50%,-50%)",
                cursor: "none"
            }}>
            {component}
        </div>
    )
}
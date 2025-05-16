import { useState, useEffect } from 'react'

export default function useDate() {
    const [currDate, setCurrDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrDate(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return currDate
}
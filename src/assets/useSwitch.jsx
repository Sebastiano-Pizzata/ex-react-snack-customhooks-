import { useState } from 'react'

export default function useSwitch(initialValue = false) {
    const [isOn, setIsOn] = useState(initialValue)

    const toggle = () => {
        setIsOn(curr => !curr)
    }

    return [isOn, toggle]
}
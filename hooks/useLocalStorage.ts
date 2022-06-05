import { useEffect, useState } from "react"


const useLocalStorage = (key: string, value: any) => {
    const [state, setState] = useState(value)

    useEffect(() => {
        const localStorageValue = localStorage.getItem(key)
        if (localStorageValue) {
            setState(JSON.parse(localStorageValue))
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }, [])

    const update = (to: any) => {
        setState(to)
        localStorage.setItem(key, JSON.stringify(to))
    }

    const remove = () => {
        setState(null)
        localStorage.removeItem(key)
    }

    return [state, update, remove]
}

export default useLocalStorage
import { useEffect, useState } from "react"

const useLocalStorage = <T>(key: string, value: T): [T, (to: T) => void, () => void] => {
    const [state, setState] = useState<T>(value)

    useEffect(() => {
        const localStorageValue = localStorage.getItem(key)
        if (localStorageValue) {
            setState(JSON.parse(localStorageValue))
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }, [])

    const update = (to: T) => {
        setState(to)
        localStorage.setItem(key, JSON.stringify(to))
    }

    const remove = () => {
        localStorage.removeItem(key)
    }

    return [state, update, remove]
}

export default useLocalStorage
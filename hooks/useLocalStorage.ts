import { useEffect, useState } from "react"

type Props = {
    key: string
    value: any
}

const useLocalStorage = ({ key, value }: Props) => {
    const [state, setState] = useState(value)
    const localStorageValue = localStorage.getItem(key)

    useEffect(() => {
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
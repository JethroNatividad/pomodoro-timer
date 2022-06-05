import React from 'react'
import { STATUS } from '../types'

type Props = {
    setTime: (time: number) => void
    time: number
    title: string
}

const TimeSetter = ({ title, time, setTime }: Props) => {
    return (
        <div>
            <h1 className='text-xl font-semibold text-white'>{title}</h1>
            <div>yo</div>
        </div>
    )
}

export default TimeSetter
import React from 'react'

type Props = {
    setTime: (time: number) => void
    time: number
    title: string
}

const TimeSetter = ({ title, time, setTime }: Props) => {
    return (
        <div>
            <h1 className='text-xl text-white'>{title}</h1>
            <div className='flex'>
                <p>-</p>
                <p className='text-3xl font-semibold text-white'>{time}</p>
                <p>+</p>
            </div>
        </div>
    )
}

export default TimeSetter
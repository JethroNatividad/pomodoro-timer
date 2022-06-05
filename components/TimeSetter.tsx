import Image from 'next/image'
import React from 'react'
import SubtractIcon from '../icons/subtract.svg'
import AddIcon from '../icons/add.svg'
import { STATUS } from '../types'

type Props = {
    setTime: (time: number, timeType: STATUS) => void
    time: number
    title: string
    timeType: STATUS
}

const TimeSetter = ({ title, time, setTime, timeType }: Props) => {
    const handleAdd = () => {
        if (time > 59) return
        setTime(time + 1, timeType)
    }

    const handleSubtract = () => {
        if (time < 2) return
        setTime(time - 1, timeType)
    }

    return (
        <div className='w-fit space-y-2'>
            <h1 className='text-xl text-white text-center'>{title}</h1>
            <div className='flex space-x-2 px-2 ring-1 ring-white rounded-lg'>
                <div className='flex items-center justify-center' onClick={handleSubtract}>
                    <Image src={SubtractIcon} objectFit="contain" className="invert cursor-pointer" height={20} width={20} />
                </div>

                <p className='text-3xl font-semibold text-white w-14 text-center'>{time}</p>

                <div className='flex items-center justify-center' onClick={handleAdd}>
                    <Image src={AddIcon} objectFit="contain" className="invert cursor-pointer" height={20} width={20} />
                </div>
            </div>
        </div>
    )
}

export default TimeSetter
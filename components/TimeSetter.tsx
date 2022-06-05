import Image from 'next/image'
import React from 'react'
import SubtractIcon from '../icons/subtract.svg'
import AddIcon from '../icons/add.svg'
type Props = {
    setTime: (time: number) => void
    time: number
    title: string
}

const TimeSetter = ({ title, time, setTime }: Props) => {
    const handleAdd = () => {
        if (time < 60) return
        setTime(time + 1)
    }

    const handleSubtract = () => {
        if (time < 2) return
        setTime(time - 1)
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
import Image from 'next/image'
import React from 'react'
import TomatoIcon from '../icons/tomato.svg'
type Props = {
    workDone: number
}

const Header = ({ workDone }: Props) => {
    return (
        <div className='shadow-lg h-16 flex items-center px-2'>
            <div className='h-16 w-16 flex items-center relative'>
                <Image src={TomatoIcon} objectFit="fill" />
                <div className='absolute top-1 left-0 w-full h-full flex items-center justify-center'>
                    <p className='text-lg font-semibold text-white'>{workDone}</p>
                </div>
            </div>
            <h1 className='text-2xl lg:text-3xl font-semibold text-white drop-shadow-sm'>Pomodoro</h1>
        </div>
    )
}

export default Header
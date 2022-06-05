import Image from 'next/image'
import React from 'react'
import TomatoIcon from '../icons/tomato.svg'
import SettingsIcon from '../icons/settings.svg'

type Props = {
    workDone: number
}

const Header = ({ workDone }: Props) => {
    return (
        <div className='shadow-lg h-16 flex items-center justify-between px-2'>
            <div className='flex items-center'>
                <div className='h-16 w-16 flex items-center relative'>
                    <Image src={TomatoIcon} objectFit="fill" />
                    <div className='absolute top-1 left-0 w-full h-full flex items-center justify-center'>
                        <p className='text-lg font-semibold text-white'>{workDone}</p>
                    </div>
                </div>
                <h1 className='text-2xl lg:text-3xl font-semibold text-white drop-shadow-sm'>Pomodoro</h1>
            </div>

            <div className='flex justify-center items-center'>
                <Image src={SettingsIcon} objectFit="contain" className="invert" height={40} width={40} />
            </div>
        </div>
    )
}

export default Header
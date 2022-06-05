import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import TomatoIcon from '../icons/tomato.svg'
import SettingsIcon from '../icons/settings.svg'

type Props = {
    workDone: number
    setSettingsOpen: Dispatch<SetStateAction<boolean>>
}

const Header = ({ workDone, setSettingsOpen }: Props) => {
    const handleSettingsOpen = () => {
        setSettingsOpen(true)
    }

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

            <div onClick={handleSettingsOpen} className='flex justify-center items-center cursor-pointer'>
                <Image src={SettingsIcon} objectFit="contain" className="invert" height={40} width={40} />
            </div>
        </div>
    )
}

export default Header
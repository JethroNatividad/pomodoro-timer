import React, { Dispatch, SetStateAction } from 'react'
import { AppSettings, STATUS } from '../types'
import CloseIcon from '../icons/close.svg'
import Image from 'next/image'
import TimeSetter from './TimeSetter'

type Props = {
    appSettings: AppSettings
    setAppSettings: (props: AppSettings) => void
    setSettingsOpen: Dispatch<SetStateAction<boolean>>
    settingsOpen: boolean
}

const Settings = ({ settingsOpen, setSettingsOpen, appSettings, setAppSettings }: Props) => {
    const handleClose = () => {
        setSettingsOpen(false)
    }
    const setTime = (time: number, timeType: STATUS) => {
        setAppSettings({
            ...appSettings,
            timers: {
                ...appSettings.timers,
                [timeType]: time
            }
        })
    }

    return (
        <div className={`${settingsOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col transition-all ease-in-out duration-300 fixed right-0 top-0 max-w-xl w-full h-full bg-light-green shadow-lg`}>
            <div className='flex justify-end w-full h-16 px-4'>
                <Image onClick={handleClose} src={CloseIcon} objectFit="contain" className="invert cursor-pointer" height={30} width={30} />
            </div>
            <div className="space-y-3">

                <h1 className='text-3xl text-white font-semibold text-center '>Adjust Timer(Minutes)</h1>
                <div className='flex space-x-3 justify-center items-center flex-wrap'>
                    <TimeSetter title="Work" timeType={STATUS.WORK} time={appSettings.timers[STATUS.WORK]} setTime={setTime} />
                    <TimeSetter title="Short Break" timeType={STATUS.BREAK} time={appSettings.timers[STATUS.BREAK]} setTime={setTime} />
                    <TimeSetter title="Long Break" timeType={STATUS.LONG_BREAK} time={appSettings.timers[STATUS.LONG_BREAK]} setTime={setTime} />
                </div>
            </div>
        </div>
    )
}

export default Settings
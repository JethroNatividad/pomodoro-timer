import React, { Dispatch, SetStateAction } from 'react'
import { AppSettings, STATUS } from '../types'
import CloseIcon from '../icons/close.svg'
import Image from 'next/image'
import TimeSetter from './TimeSetter'

type Props = {
    appSettings: AppSettings
    setAppSettings: Dispatch<SetStateAction<AppSettings>>
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
        <div className={`${settingsOpen ? 'flex' : 'hidden'} flex-col transition-all delay-500 absolute right-0 top-0 max-w-xl w-full h-full bg-light-green shadow-lg`}>
            <div className='flex justify-end w-full h-16 px-4'>
                <Image onClick={handleClose} src={CloseIcon} objectFit="contain" className="invert cursor-pointer" height={30} width={30} />
            </div>
            <div>
                <TimeSetter title="Work time" timeType={STATUS.WORK} time={appSettings.timers[STATUS.WORK]} setTime={setTime} />
            </div>
        </div>
    )
}

export default Settings
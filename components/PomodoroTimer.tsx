import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import getFormattedTime, { calculatePercentage, getStatusText, nextStatus, previousStatus } from '../lib/timer'
import { AppSettings, STATUS, TIMER_STATUS } from '../types'
import Pie from './TimerCircle'
import ResetIcon from '../icons/reset.svg'
import Image from 'next/image'

type Props = {
    appSettings: AppSettings
    setWorkDone: Dispatch<SetStateAction<number>>
    workDone: number
}

const PomodoroTimer = ({ appSettings, setWorkDone, workDone }: Props) => {
    const [status, setStatus] = useState<STATUS>(STATUS.WORK)
    const [timerStatus, setTimerStatus] = useState<TIMER_STATUS>(TIMER_STATUS.PAUSED)
    const [secondsRemaining, setSecondsRemaining] = useState<number>(appSettings.timers.workTime * 60)



    useEffect(() => {
        if (timerStatus === TIMER_STATUS.RUNNING) {
            const interval = setInterval(() => {
                setSecondsRemaining(secondsRemaining - 1)
                if (secondsRemaining === 0) {
                    nextStatus({ status, setTimerStatus, setWorkDone, setStatus, setSecondsRemaining, appSettings, workDone })
                }
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [timerStatus, secondsRemaining])

    const handleStart = () => {
        setTimerStatus(TIMER_STATUS.RUNNING)
    }

    const handlePause = () => {
        setTimerStatus(TIMER_STATUS.PAUSED)
    }

    const handleReset = () => {
        setTimerStatus(TIMER_STATUS.PAUSED)
        setSecondsRemaining(appSettings.timers[status] * 60)
    }

    const handleNext = () => {
        nextStatus({ status, setTimerStatus, setWorkDone, setStatus, setSecondsRemaining, appSettings, workDone })
    }

    const handlePrevious = () => {
        previousStatus({ status, setTimerStatus, setWorkDone, setStatus, setSecondsRemaining, appSettings, workDone })
    }

    return (

        <div className='flex flex-col mt-10 items-center justify-center space-y-5'>
            <h1 className='text-xl font-semibold text-white'>{getStatusText(status)}</h1>
            <Pie percentage={calculatePercentage(secondsRemaining, appSettings.timers[status] * 60)} handleStart={handleStart} handlePause={handlePause} timerStatus={timerStatus} />
            <h1 className='text-3xl font-semibold text-white'>{getFormattedTime(secondsRemaining)}</h1>
            <p onClick={handlePrevious}>Prev</p>
            <p onClick={handleNext}>Next</p>

            <div onClick={handleReset} className={`${timerStatus === TIMER_STATUS.PAUSED && calculatePercentage(secondsRemaining, appSettings.timers[status] * 60) !== 100 ? 'opacity-100' : 'opacity-0'} hover:animate-spin cursor-pointer transition-all ease-in-out duration-500 flex  items-center justify-center absolute bottom-10`}>
                <Image src={ResetIcon} objectFit="contain" className="invert" height={30} width={30} />
            </div>
        </div>

    )
}

export default PomodoroTimer
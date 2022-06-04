import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { AppSettings, STATUS, TIMER_STATUS } from '../types'

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
                    if (status === STATUS.WORK && workDone === 3) {
                        setTimerStatus(TIMER_STATUS.PAUSED)
                        setWorkDone(workDone + 1)
                        setStatus(STATUS.LONG_BREAK)
                        return setSecondsRemaining(appSettings.timers.longBreakTime * 60)
                    }

                    if (status === STATUS.WORK) {
                        setTimerStatus(TIMER_STATUS.PAUSED)
                        setWorkDone(workDone + 1)
                        setStatus(STATUS.BREAK)
                        return setSecondsRemaining(appSettings.timers.breakTime * 60)
                    }

                    if (status === STATUS.BREAK) {
                        setTimerStatus(TIMER_STATUS.PAUSED)
                        setStatus(STATUS.WORK)
                        return setSecondsRemaining(appSettings.timers.workTime * 60)
                    }

                    if (status === STATUS.LONG_BREAK) {
                        setTimerStatus(TIMER_STATUS.PAUSED)
                        setStatus(STATUS.WORK)
                        return setSecondsRemaining(appSettings.timers.workTime * 60)
                    }

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

    return (
        <div>
            <p>Work done: {workDone}</p>
            <h1>{status}</h1>
            <h1>{secondsRemaining}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default PomodoroTimer
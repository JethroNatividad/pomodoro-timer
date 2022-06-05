import { Dispatch, SetStateAction } from "react";
import { AppSettings, STATUS, TIMER_STATUS } from "../types";

const getFormattedTime = (timestamp: number) => {
    const hours = Math.floor(timestamp / 60 / 60)
    const minutes = Math.floor(timestamp / 60) - (hours * 60)
    const seconds = timestamp % 60
    return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

}
export const calculatePercentage = (current: number, total: number) => {
    return Math.floor((current / total) * 100)
}

type NextStatusProps = {
    status: STATUS
    setWorkDone: Dispatch<SetStateAction<number>>
    setStatus: Dispatch<SetStateAction<STATUS>>
    setSecondsRemaining: Dispatch<SetStateAction<number>>
    setTimerStatus: Dispatch<SetStateAction<TIMER_STATUS>>
    appSettings: AppSettings
    workDone: number
}

export const nextStatus = ({ status, setTimerStatus, setWorkDone, setStatus, setSecondsRemaining, appSettings, workDone }: NextStatusProps) => {
    if (status === STATUS.WORK && workDone % 4 === 3) {
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

export const previousStatus = ({ status, setTimerStatus, setWorkDone, setStatus, setSecondsRemaining, appSettings, workDone }: NextStatusProps) => {
    // to avoid negative values
    if (workDone < 1) return

    if (status === STATUS.WORK && workDone % 4 === 0) {
        setTimerStatus(TIMER_STATUS.PAUSED)
        setStatus(STATUS.LONG_BREAK)
        return setSecondsRemaining(appSettings.timers.longBreakTime * 60)
    }

    if (status === STATUS.WORK) {
        setTimerStatus(TIMER_STATUS.PAUSED)
        setStatus(STATUS.BREAK)
        return setSecondsRemaining(appSettings.timers.breakTime * 60)
    }

    if (status === STATUS.BREAK) {
        setTimerStatus(TIMER_STATUS.PAUSED)
        setWorkDone(workDone - 1)
        setStatus(STATUS.WORK)
        return setSecondsRemaining(appSettings.timers.workTime * 60)
    }

    if (status === STATUS.LONG_BREAK) {
        setTimerStatus(TIMER_STATUS.PAUSED)
        setWorkDone(workDone - 1)
        setStatus(STATUS.WORK)
        return setSecondsRemaining(appSettings.timers.workTime * 60)
    }
}

export default getFormattedTime
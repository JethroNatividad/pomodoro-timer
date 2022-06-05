import { Dispatch, SetStateAction } from "react"

export type AppSettings = {
    timers: {
        workTime: number
        breakTime: number
        longBreakTime: number
    }
}

export enum STATUS {
    WORK = 'workTime',
    BREAK = 'breakTime',
    LONG_BREAK = 'longBreakTime'
}

export enum TIMER_STATUS {
    PAUSED = 'PAUSED',
    RUNNING = 'RUNNING'
}

export type NextStatusProps = {
    status: STATUS
    setWorkDone: Dispatch<SetStateAction<number>>
    setStatus: Dispatch<SetStateAction<STATUS>>
    setSecondsRemaining: Dispatch<SetStateAction<number>>
    setTimerStatus: Dispatch<SetStateAction<TIMER_STATUS>>
    appSettings: AppSettings
    workDone: number
}

export type PreviousStatusProps = NextStatusProps
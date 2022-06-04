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
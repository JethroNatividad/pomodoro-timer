import React, { Dispatch, SetStateAction } from 'react'
import { AppSettings } from '../types'

type Props = {
    appSettings: AppSettings
    setAppSettings: Dispatch<SetStateAction<AppSettings>>
    setSettingsOpen: Dispatch<SetStateAction<boolean>>
    settingsOpen: boolean
}

const Settings = (props: Props) => {
    return (
        <div>Settings</div>
    )
}

export default Settings
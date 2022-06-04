import React from 'react'

type Props = {
    workDone: number
}

const Header = ({ workDone }: Props) => {
    return (
        <div>
            <h1>Pomodoro</h1>
        </div>
    )
}

export default Header
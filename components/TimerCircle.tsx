import { TIMER_STATUS } from "../types";
import PauseIcon from '../icons/pause.svg'
import PlayIcon from '../icons/play.svg'

import Image from "next/image";
const cleanPercentage = (percentage: number) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = ({ color, percentage, timerStatus }: {
    color: string, percentage: number, timerStatus: TIMER_STATUS,
}) => {
    const r = 125;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
    return (
        <circle
            className={`${timerStatus === TIMER_STATUS.PAUSED ? 'opacity-20' : 'opacity-100'} transition-all duration-500 ease-in-out`}
            r={r}
            cx={50}
            cy={150}
            fill="transparent"
            stroke={strokePct !== circ ? color : ""} // remove color as 0% sets full circumference
            strokeWidth={"2rem"}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
        ></circle>
    );
};

type PieProps = {
    percentage: number,
    handleStart: () => void,
    handlePause: () => void,
    timerStatus: TIMER_STATUS,
}
const Pie = ({ percentage, handleStart, handlePause, timerStatus }: PieProps) => {
    const pct = cleanPercentage(percentage);
    const handleClick = timerStatus === TIMER_STATUS.RUNNING ? handlePause : handleStart;

    return (
        <div onClick={handleClick} className="relative w-fit h-fit cursor-pointer ">

            <svg height={300} width={300}>
                <g transform={`rotate(-90 ${"100 100"})`}>
                    <Circle color="lightgrey" percentage={0} timerStatus={timerStatus} />
                    <Circle color='white' percentage={pct} timerStatus={timerStatus} />
                </g>
            </svg>
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full">
                <div className={`opacity-0 ${timerStatus === TIMER_STATUS.PAUSED && 'opacity-100'} w-20 h-20 transition-all duration-200 ease-in-out flex justify-center items-center`}>
                    {
                        percentage === 100 ? (
                            <Image src={PlayIcon} objectFit="fill" className="invert" />
                        ) : (
                            <Image src={PauseIcon} objectFit="fill" className="invert" />
                        )
                    }
                </div>
            </div>
        </div >
    );
};

export default Pie
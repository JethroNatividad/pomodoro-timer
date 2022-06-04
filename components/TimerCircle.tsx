import { TIMER_STATUS } from "../types";

const cleanPercentage = (percentage: number) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = ({ color, percentage }: { color: string, percentage: number }) => {
    const r = 125;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
    return (
        <circle
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
    color: string,
    percentage: number,
    handleStart: () => void,
    handlePause: () => void,
    timerStatus: TIMER_STATUS,
}
const Pie = ({ percentage, color, handleStart, handlePause, timerStatus }: PieProps) => {
    const pct = cleanPercentage(percentage);
    const handleClick = timerStatus === TIMER_STATUS.RUNNING ? handlePause : handleStart;

    return (
        <div onClick={handleClick} className="relative w-fit h-fit">

            <svg height={300} width={300}>
                <g transform={`rotate(-90 ${"100 100"})`}>
                    <Circle color="lightgrey" percentage={0} />
                    <Circle color={color} percentage={pct} />
                </g>
            </svg>
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full">
                {timerStatus === TIMER_STATUS.PAUSED && (
                    <div className="text-center text-white text-2xl">Paused</div>
                )}
            </div>
        </div >
    );
};

export default Pie
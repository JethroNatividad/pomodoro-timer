const getFormattedTime = (timestamp: number) => {
    const hours = Math.floor(timestamp / 60 / 60)
    const minutes = Math.floor(timestamp / 60) - (hours * 60)
    const seconds = timestamp % 60
    return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

}
export const calculatePercentage = (current: number, total: number) => {
    return Math.floor((current / total) * 100)
}

export default getFormattedTime
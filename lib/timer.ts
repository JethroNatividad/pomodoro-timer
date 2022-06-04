const getFormattedTime = (timestamp: number) => {
    const hours = Math.floor(timestamp / 60 / 60)
    const minutes = Math.floor(timestamp / 60) - (hours * 60)
    const seconds = timestamp % 60
    return `${hours}:${minutes}:${seconds}`

}
export default getFormattedTime
export interface IRightPanel {
    cloudy: number,
    humidity: number,
    wind: number,
    getWeather: (e: string) => void,
    error: null | string
}
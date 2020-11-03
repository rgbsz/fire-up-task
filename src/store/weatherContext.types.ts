export interface IWeather {
    temp: number,
    humidity: number,
    wind: number,
    cloudy: number,
    city: string,
    time: number,
    request: boolean
}

export interface IWeatherContext {
    weather: IWeather,
    setWeather: React.Dispatch<React.SetStateAction<IWeather>>
}
export interface IWeather {
    temp: number,
    humidity: number,
    wind: number,
    cloudy: number,
    city: string,
    time: string,
    weatherType: string
}

export interface IRequest {
    status: boolean,
    msg: null | string
}

export interface IWeatherContext {
    weather: IWeather,
    setWeather: React.Dispatch<React.SetStateAction<IWeather>>,
    request: IRequest,
    setRequest: React.Dispatch<React.SetStateAction<IRequest>>
}
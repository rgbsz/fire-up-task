import { IRequest, IWeather } from "./weatherContext.types";

export const INITIAL_WEATHER: IWeather = {
    temp: 0,
    wind: 0,
    time: '',
    city: '',
    cloudy: 0,
    humidity: 0,
    weatherType: ''
}

export const INITIAL_REQUEST: IRequest = {
    status: false,
    msg: null
}
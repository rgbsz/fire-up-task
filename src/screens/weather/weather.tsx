import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import weatherContext from '../../store'
import { Wrapper } from './weather.styles'
import LeftPanel from '../../components/leftPanel'
import RightPanel from '../../components/rightPanel'
import LoadingScreen from '../../components/loadingScreen'
import { WEATHER_PHOTOS } from './weather.consts'
import dayjs from 'dayjs'

const Weather: React.FC = (): JSX.Element => {
    const { weather, setWeather, request, setRequest } = useContext(weatherContext)
    console.log(request.msg)
    const [image, setImage] = useState<string>(WEATHER_PHOTOS.Clear)
    const GetWeather = async (city: string) => {
        try {
            setRequest({
                status: false,
                msg: null
            })
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ffb65c0bf21dcebcb37124fb7de4f27&units=metric`);
            const data = response.data
            const time = new Date((data.dt + data.timezone - 3600) * 1000)
            console.log(time)
            setTimeout(() => {
                switch(data.weather[0].main) {
                    case 'Thunderstorm':
                        setImage(WEATHER_PHOTOS.Thunderstorm)
                        break
                    case 'Drizzle':
                        setImage(WEATHER_PHOTOS.Drizzle)
                        break
                    case 'Rain':
                        setImage(WEATHER_PHOTOS.Rain)
                        break
                    case 'Snow':
                        setImage(WEATHER_PHOTOS.Snow)
                        break
                    case 'Clear':
                        setImage(WEATHER_PHOTOS.Clear)
                        break
                    case 'Clouds':
                        setImage(WEATHER_PHOTOS.Clouds)
                        break
                    case 'Ash':
                        setImage(WEATHER_PHOTOS.Ash)
                        break
                    case 'Dust':
                        setImage(WEATHER_PHOTOS.Dust)
                        break
                    case 'Haze':
                        setImage(WEATHER_PHOTOS.Haze)
                        break
                    case 'Mist':
                        setImage(WEATHER_PHOTOS.Mist)
                        break
                    case 'Smoke':
                        setImage(WEATHER_PHOTOS.Smoke)
                        break
                    case 'Tornado':
                        setImage(WEATHER_PHOTOS.Tornado)
                        break
                    case 'Fog':
                        setImage(WEATHER_PHOTOS.Mist)
                        break
                    case 'Sand':
                        setImage(WEATHER_PHOTOS.Dust)
                        break
                    case 'Squall':
                        setImage(WEATHER_PHOTOS.Tornado)
                        break
                    default:
                        setImage(WEATHER_PHOTOS.Clear)
                        break
                }
            }, 800)
            setTimeout(() => {
                setWeather({
                    temp: parseInt(data.main.temp),
                    wind: data.wind.speed,
                    time: `${time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`,
                    city: data.name,
                    cloudy: data.clouds.all,
                    humidity: data.main.humidity,
                    weatherType: data.weather[0].main
                })
                setRequest({
                    status: true,
                    msg: null
                })
            }, 1500)
        } catch (error) {
            setTimeout(() => {
                setRequest({
                    status: true,
                    msg: `We couldn't find city by the name you provided :(`
                })
            }, 1500)
        }
    }
    useEffect(() => {
        if(request.status === false) {
            GetWeather('Katowice')
        }
    }, [])
    return (
        <Wrapper image={image}>
            <LoadingScreen active={request.status === false ? true : false}/>
            <LeftPanel temp={weather.temp} city={weather.city} time={weather.time}/>
            <RightPanel cloudy={weather.cloudy} wind={weather.wind} humidity={weather.humidity} getWeather={(e: string) => GetWeather(e)} error={request.msg}/>
        </Wrapper>
    )
}

export default Weather
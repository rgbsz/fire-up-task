import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import weatherContext from '../../store'
import { Wrapper } from './weather.styles'
import LeftPanel from '../../components/leftPanel'
import RightPanel from '../../components/rightPanel'

const Weather: React.FC = (): JSX.Element => {
    const { weather, setWeather } = useContext(weatherContext)
    // const Funkcja = async () => {
    //     try {
    //         const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Rybnik&appid=7ffb65c0bf21dcebcb37124fb7de4f27');
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    useEffect(() => {
        // Funkcja()
    }, [])
    return (
        <Wrapper>
            <LeftPanel />
            <RightPanel />
        </Wrapper>
    )
}

export default Weather
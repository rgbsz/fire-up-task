import React from 'react'
import Cities from '../cities'
import Details from '../details'
import TextField from '../textfield'

import { Wrapper, Author, Error } from './rightPanel.styles'
import { IRightPanel } from './rightPanel.types'

const RightPanel: React.FC<IRightPanel> = ({ cloudy, wind, humidity, getWeather, error }): JSX.Element => {
    return (
        <Wrapper>
            <TextField getWeather={(e: string) => getWeather(e)}/>
            { error && <Error>{error}</Error> }
            <Cities getWeather={(e: string) => getWeather(e)}/>
            <Details cloudy={cloudy} wind={wind} humidity={humidity}/>
            <Author>Designed by Arthur K (<a href='https://dribbble.com/shots/7376567-Weather-App-Website' target='_blank'>dribbble</a>)</Author>
        </Wrapper>
    )
}

export default RightPanel
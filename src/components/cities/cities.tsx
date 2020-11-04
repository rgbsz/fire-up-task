import React from 'react'

import { Wrapper, City } from './cities.styles'
import { ICitiesProps } from './cities.types'

const Cities: React.FC<ICitiesProps> = ({ getWeather }): JSX.Element => {
    return (
        <Wrapper>
            <City onClick={() => getWeather('Rybnik')}>Rybnik</City>
            <City onClick={() => getWeather('Gliwice')}>Gliwice</City>
            <City onClick={() => getWeather('Katowice')}>Katowice</City>
            <City onClick={() => getWeather('Sosnowiec')}>Sosnowiec</City>
        </Wrapper>
    )
}

export default Cities
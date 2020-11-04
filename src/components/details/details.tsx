import React from 'react'

import { Wrapper, Heading, Item } from './details.styles'
import { IDetailsTypes } from './details.types'

const Details: React.FC<IDetailsTypes> = ({ cloudy, wind, humidity }): JSX.Element => {
    return (
        <Wrapper>
            <Heading>Weather Details</Heading>
            <Item>
                <p>Cloudy</p>
                <span>{cloudy}%</span>
            </Item>
            <Item>
                <p>Wind</p>
                <span>{wind}m/s</span>
            </Item>
            <Item>
                <p>Humidity</p>
                <span>{humidity}%</span>
            </Item>
        </Wrapper>
    )
}

export default Details
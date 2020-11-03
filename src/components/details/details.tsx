import React from 'react'

import { Wrapper, Heading, Item } from './details.styles'

const Details: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <Heading>Weather Details</Heading>
            <Item>
                <p>Cloudy</p>
                <span>86%</span>
            </Item>
            <Item>
                <p>Wind</p>
                <span>8km/h</span>
            </Item>
            <Item>
                <p>Rain</p>
                <span>8mm</span>
            </Item>
        </Wrapper>
    )
}

export default Details
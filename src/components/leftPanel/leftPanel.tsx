import React from 'react'

import { Wrapper, Content, Temp, Description, Name, Time } from './leftPanel.styles'
import { ILeftPanelProps } from './leftPanel.types'

const LeftPanel: React.FC<ILeftPanelProps> = ({ temp, city, time }): JSX.Element => {
    return (
        <Wrapper>
            <Content>
                <Temp>{temp}°C</Temp> 
                <Description>
                    <Name>{city}</Name>
                    <Time>{time}</Time>    
                </Description>  
            </Content>
        </Wrapper>
    )
}

export default LeftPanel
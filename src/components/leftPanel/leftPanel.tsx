import React from 'react'

import { Wrapper, Content, Temp, Description, Name, Time } from './leftPanel.styles'

const LeftPanel: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <Content>
                <Temp>26°C</Temp> 
                <Description>
                    <Name>Katowice</Name>
                    <Time>19:06</Time>    
                </Description>  
            </Content>
        </Wrapper>
    )
}

export default LeftPanel
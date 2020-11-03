import React from 'react'
import Cities from '../cities'
import Details from '../details'
import TextField from '../textfield'

import { Wrapper } from './rightPanel.styles'

const RightPanel: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <TextField />
            <Cities />
            <Details />
        </Wrapper>
    )
}

export default RightPanel
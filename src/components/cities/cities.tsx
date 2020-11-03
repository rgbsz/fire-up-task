import React from 'react'

import { Wrapper, City } from './cities.styles'

const Cities: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <City>Rybnik</City>
            <City>Gliwice</City>
            <City>Katowice</City>
            <City>Sosnowiec</City>
        </Wrapper>
    )
}

export default Cities
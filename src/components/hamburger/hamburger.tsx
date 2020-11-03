import React from 'react'

import { Wrapper } from './hamburger.styles'
import { IHamburgerProps } from './hamburger.types'

const Hamburger: React.FC<IHamburgerProps> = ({ status, setStatus }): JSX.Element => {
    return (
        <Wrapper className='hide-on-large-only' onClick={() => setStatus()}>
            <span></span>
            <span></span>
            <span></span>
        </Wrapper>
    )
}

export default Hamburger
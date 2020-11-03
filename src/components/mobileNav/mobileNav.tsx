import React from 'react'
import { Wrapper, StyledLink } from './mobileNav.styles'
import { IMobileNavProps } from './mobileNav.types'

const MobileNav: React.FC<IMobileNavProps> = ({ status, setStatus }): JSX.Element => {
    return (
        <Wrapper status={status}>
            <StyledLink to='/' onClick={() => setStatus()}>HOME</StyledLink>
            <StyledLink to='/' onClick={() => setStatus()}>MENU 2</StyledLink>
            <StyledLink to='/' onClick={() => setStatus()}>MENU 3</StyledLink>
            <StyledLink to='/weather' onClick={() => setStatus()}>POGODA</StyledLink>
        </Wrapper>
    )
}

export default MobileNav
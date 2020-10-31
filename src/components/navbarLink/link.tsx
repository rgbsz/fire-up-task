import React from 'react'

import { StyledLink } from './link.styles'
import { ILinkProps } from './link.types'

const NavbarLink: React.FC<ILinkProps> = ({ text, link, active }): JSX.Element => {
    return (
        <StyledLink to={link} active={active}>{text}</StyledLink>
    )
}

export default NavbarLink
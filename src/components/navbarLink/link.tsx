import React from 'react'
import { withRouter } from 'react-router'

import { StyledLink } from './link.styles'

const NavbarLink: React.FC<{ text: string, link: string }> = ({ text, link }): JSX.Element => {
    return (
        <StyledLink to={link}>{text}</StyledLink>
    )
}

export default NavbarLink
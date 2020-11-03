import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IMobileNavStyled } from './mobileNav.types'

export const Wrapper = styled.div<IMobileNavStyled>`
    position: absolute;
    top: 4.6rem;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.yellow};
    display: ${({ status }) => status ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: -1;
`

export const StyledLink = styled(Link)`
    color: black;
`
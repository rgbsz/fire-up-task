import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ILinkStyled } from './link.types'

export const StyledLink = styled(Link)<ILinkStyled>`
    padding: 0 1rem;
    &:last-child {
        margin: 0 0 0 1rem
    }
    background: ${({ active }) => active ? '#EAD280' : 'white'};
    color: ${({ active }) => active ? 'white' : 'black'};
    position: relative;
    &::before {
        display: ${({ active }) => active ? 'block' : 'none'};
        content: '';
        position: absolute;
        width: 100%;
        height: 6px;
        top: -6px;
        left: 0;
        background: #DFBB42;
    }
    &::after {
        display: ${({ active }) => active ? 'block' : 'none'};
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -3px;
        left: 0;
        background: #B0B0B0;
    }
`
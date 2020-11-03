import styled from 'styled-components'

import { IBoxButton } from './boxButton.types'

export const Button = styled.button<IBoxButton>`
    position: absolute;
    ${({ top }) => top && 'top: ' + top + ';'}
    ${({ left }) => left && 'left: ' + left + ';'}
    ${({ bottom }) => bottom && 'bottom: ' + bottom + ';'}
    ${({ right }) => right && 'right: ' + right + ';'}
    padding: 1.5rem;
    font-size: 1.5rem;
    border: 1px solid black;
    background: white;
    &:focus {
        outline: none;
    }
    @media only screen and (max-width: 600px) {
        position: relative;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`
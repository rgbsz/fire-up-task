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
`
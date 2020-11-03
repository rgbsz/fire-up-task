import React from 'react'

import { Button } from './boxButton.styles'
import { IBoxButtonProps } from './boxButton.types'

const BoxButton: React.FC<IBoxButtonProps> = ({ left, right, top, bottom, onClick, text, active, color }): JSX.Element => {
    return (
        <Button left={left} right={right} top={top} bottom={bottom} onClick={() => onClick()} active={active} color={color}>{text}</Button>
    )
}

export default BoxButton
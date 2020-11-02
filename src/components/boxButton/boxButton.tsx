import React from 'react'

import { Button } from './boxButton.styles'
import { IBoxButtonProps } from './boxButton.types'

const BoxButton: React.FC<IBoxButtonProps> = ({ left, right, top, bottom, onClick, text }): JSX.Element => {
    return (
        <Button left={left} right={right} top={top} bottom={bottom} onClick={() => onClick()}>{text}</Button>
    )
}

export default BoxButton
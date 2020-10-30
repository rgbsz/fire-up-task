import React from 'react'

import { Button } from './boxButton.styles'
import { IBoxButtonProps } from './boxButton.types'

const BoxButton: React.FC<IBoxButtonProps> = ({ left, right, top, bottom, onClick }): JSX.Element => {
    return (
        <Button left={left} right={right} top={top} bottom={bottom} onClick={() => onClick()}>BoxButton</Button>
    )
}

export default BoxButton
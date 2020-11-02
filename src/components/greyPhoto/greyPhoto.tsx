import React from 'react'

import { Wrapper, Overlay } from './greyPhoto.styles'
import { IGreyPhotoProps } from './greyPhoto.types'

const GreyPhoto: React.FC<IGreyPhotoProps> = ({ src, side }): JSX.Element => {
    return (
        <Wrapper src={src}>
            <Overlay side={side}/>
        </Wrapper>
    )
}

export default GreyPhoto
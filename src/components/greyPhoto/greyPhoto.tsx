import React from 'react'

import { Wrapper, Image, Overlay } from './greyPhoto.styles'
import { IGreyPhotoProps } from './greyPhoto.types'

const GreyPhoto: React.FC<IGreyPhotoProps> = ({ src, side }): JSX.Element => {
    return (
        <Wrapper>
            <Overlay side={side}/>
            <Image src={src}/>
        </Wrapper>
    )
}

export default GreyPhoto
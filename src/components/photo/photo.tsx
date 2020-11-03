import React from 'react'

import { Content, DescribedContent, Wrapper } from './photo.styles'
import { IPhotoProps } from './photo.types'

const Photo: React.FC<IPhotoProps> = ({ src, described, color }): JSX.Element => {
    return (
        <Wrapper className={`col l3 s6`}>
            { 
                described ? (
                    <DescribedContent color={color}>
                        <img src={src} alt=''/>
                        <span><p>BOX<br/>CAPTION</p></span>
                    </DescribedContent>
                ) : (
                    <Content color={color}>
                        <img src={src} alt=''/>
                    </Content>
                )
            }
        </Wrapper>
    )
}

export default Photo
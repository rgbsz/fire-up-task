import React from 'react'

import { Content, DescribedContent, Wrapper } from './photo.styles'
import { IPhotoProps } from './photo.types'

const Photo: React.FC<IPhotoProps> = ({ src, described }): JSX.Element => {
    return (
        <Wrapper className='col l3'>
            { 
                described ? (
                    <DescribedContent>
                        <img src={src} alt=''/>
                        <span>BOX<br/>CAPTION</span>
                    </DescribedContent>
                ) : (
                    <Content>
                        <img src={src} alt=''/>
                    </Content>
                )
            }
        </Wrapper>
    )
}

export default Photo
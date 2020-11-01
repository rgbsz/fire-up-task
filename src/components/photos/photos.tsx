import React from 'react'

import Photo from '../photo/photo'
import { IPhotoProps } from '../photo/photo.types'

import { PHOTOS } from './photos.consts'

import { Wrapper } from './photos.styles'

const Photos: React.FC = (): JSX.Element => {
    return (
        <Wrapper className="row">
            {
                PHOTOS.map((item: IPhotoProps, i: number) => <Photo key={i} src={item.src} described={item.described}/>)
            }
        </Wrapper>
    )
}

export default Photos
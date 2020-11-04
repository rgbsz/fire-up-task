import React from 'react'

import Photo from '../photo/photo'
import { IPhotoProps } from '../photo/photo.types'

import { PHOTOS, PHOTOS_SM, PHOTOS_MD } from './photos.consts'

import { Wrapper } from './photos.styles'

const Photos: React.FC = (): JSX.Element => {
    return (
        <>
            <Wrapper className='row hide-on-med-and-down'>
            {
                    PHOTOS.map((item: IPhotoProps, i: number) => <Photo src={item.src} described={item.described} color={item.color} key={i}/>)
                }
            </Wrapper>
            <Wrapper className='row hide-on-large-only hide-on-small-only'>
            {
                    PHOTOS_MD.map((item: IPhotoProps, i: number) => <Photo src={item.src} described={item.described} color={item.color} key={i}/>)
                }
            </Wrapper>
            <Wrapper className='row hide-on-med-and-up'>
            {
                    PHOTOS_SM.map((item: IPhotoProps, i: number) => <Photo src={item.src} described={item.described} color={item.color} key={i}/>)
                }
            </Wrapper>
        </>
    )
}

export default Photos
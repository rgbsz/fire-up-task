import React from 'react'
import GreyPhoto from '../greyPhoto'
import { IGreyPhotoProps } from '../greyPhoto/greyPhoto.types'
import List from '../list'
import { GREY_PHOTOS } from './greySection.consts'

import { Wrapper, GreyPhotosWrapper } from './greySection.styles'

const GreySection: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <GreyPhotosWrapper>
            {
                GREY_PHOTOS.map((item: IGreyPhotoProps, i: number) => <GreyPhoto src={item.src} side={item.side} key={i}/>)
            }
            </GreyPhotosWrapper>
            <List />
        </Wrapper>
    )
}

export default GreySection
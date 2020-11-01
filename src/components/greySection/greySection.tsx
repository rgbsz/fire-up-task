import React from 'react'
import GreyPhoto from '../greyPhoto'
import { IGreyPhotoProps } from '../greyPhoto/greyPhoto.types'
import List from '../list'
import { GREY_PHOTOS } from './greySection.consts'

import { Wrapper } from './greySection.styles'

const GreySection: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            {
                GREY_PHOTOS.map((item: IGreyPhotoProps) => <GreyPhoto src={item.src} side={item.side}/>)
            }
            <List />
        </Wrapper>
    )
}

export default GreySection
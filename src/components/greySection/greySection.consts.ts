import { IGreyPhotoProps } from "../greyPhoto/greyPhoto.types"
import FirstPhoto from '../../images/desktop5.png'
import SecondPhoto from '../../images/desktop6.png'

export const GREY_PHOTOS: IGreyPhotoProps[] = [
    {
        src: FirstPhoto,
        side: 'left'
    },
    {
        src: SecondPhoto,
        side: 'right'
    }
]